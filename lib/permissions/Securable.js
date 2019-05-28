import utils from "../utils";
import { basePermissions } from "./IPermissions";
/** Allows you to check the permissions of a securable (list or site) */
var Securable = /** @class */ (function () {
    function Securable(baseUrl, ctx) {
        this.baseUrl = baseUrl;
        this._dao = ctx;
    }
    /** Gets all the role assignments on that securable  */
    Securable.prototype.getRoleAssignments = function () {
        var url = this.baseUrl + "/RoleAssignments?$expand=Member,RoleDefinitionBindings";
        return this._dao.get(url)
            .then(utils.validateODataV2)
            .then(function (results) { return results.map(transformRoleAssignment); });
    };
    Securable.prototype.getRoleDefinitionId = function(name){
        var url = this.baseUrl + '/roledefinitions/getbyname(\''+ name + '\')/id';
        return this._dao.get(url)
    }

    
    
    Securable.prototype.checkPrivs = function (user) {
        var login = encodeURIComponent(user.LoginName);
        var url = this.baseUrl + "/getusereffectivepermissions(@v)?@v='" + login + "'";
        return this._dao.get(url).then(utils.validateODataV2);
    };
    /** Gets all the role assignments on that securable. If you don't pass an email, it will use the current user. */
    Securable.prototype.check = function (email) {
        var _this = this;
        if (!email && !utils.isBrowser()) {
            return Promise.reject("Can't check permissions. No email passed and no current user");
        }
        // If no email is passed, then get current user, else get user by email
        var req = !email
            ? this._dao.get('/web/getuserbyid(' + _spPageContextInfo.userId + ')').then(function (data) { return data.d; })
            : this._dao.web.getUser(email);
        return req.then(function (user) { return _this.checkPrivs(user); })
            .then(function (privs) { return permissionMaskToStrings(privs.GetUserEffectivePermissions.Low, privs.GetUserEffectivePermissions.High); });
    };
    return Securable;
}());
export default Securable;
var transformRoleAssignment = function (raw) {
    var member = {
        login: raw.Member.LoginName,
        name: raw.Member.Title,
        id: raw.Member.Id
    };
    var roles = raw.RoleDefinitionBindings.results.map(function (roleDef) {
        return {
            name: roleDef.Name,
            description: roleDef.Description,
            basePermissions: permissionMaskToStrings(roleDef.BasePermissions.Low, roleDef.BasePermissions.High)
        };
    });
    return { member: member, roles: roles };
};
var permissionMaskToStrings = function (lowMask, highMask) {
    var permissions = [];
    basePermissions.forEach(function (basePermission) {
        if ((basePermission.low & lowMask) > 0 || (basePermission.high & highMask) > 0) {
            permissions.push(basePermission.name);
        }
    });
    return permissions;
};
