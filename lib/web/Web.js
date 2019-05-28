import utils from "../utils";
import Securable from "../permissions/Securable";
var Web = /** @class */ (function () {
    function Web(ctx) {
        this.baseUrl = "/web";
        this._dao = ctx;
        this.permissions = new Securable(this.baseUrl, ctx);
    }
    /** Retrieves basic information about the site */
    Web.prototype.getInfo = function () {
        return this._dao.get(this.baseUrl).then(utils.validateODataV2);
    };
    /** Retrieves all of the subsites */
    Web.prototype.getSubsites = function () {
        return this._dao.get(this.baseUrl + "/webinfos").then(utils.validateODataV2);
    };
    Web.prototype.getUser = function (email) {
        var url = email
            ? this.baseUrl + "/SiteUsers/GetByEmail('" + email + "')"
            : this.baseUrl + "/CurrentUser";
        return this._dao.get(url).then(utils.validateODataV2);
    };
    Securable.prototype.getGroupId = function(name){
        var url = this.baseUrl + "/sitegroups/getbyname('"+name+"')?$select=id";
        return this._dao.get(url)
    }
    Web.prototype.ensureUser = function (login) {
        return this._dao.post("/web/ensureUser('" + login + "')").then(utils.validateODataV2);
    };
    /** Retrieves a file by server relative url */
    Web.prototype.getFile = function (url) {
        var url = "/web/getfilebyserverrelativeurl('" + url + "')";
        return this._dao.get(url).then(utils.validateODataV2);
    };
    Web.prototype._copyFile = function (sourceUrl, destinationUrl, digest) {
        var url = "/web/getfilebyserverrelativeurl('" + sourceUrl + "')/CopyTo"; //(strnewurl='${destinationUrl}',boverwrite=true)`
        var options = {
            headers: utils.headers.getAddHeaders(digest),
        };
        var body = {
            strNewUrl: destinationUrl,
            bOverWrite: true,
        };
        return this._dao.post(url, body, options);
    };

    Web.prototype.createFolder = function(libraryUrl, folderTitle) {
        var url = this.baseUrl+"/Folders/add('"+libraryUrl+"/"+folderTitle+"')";
        return this._dao.post(url);
    }

    Web.prototype.breakRoleInheritanceForFolder = function (folderUrl){
        var _this = this;
        var url = this.baseUrl + "/GetFolderByServerRelativeUrl('"+folderUrl+"')/ListItemAllFields/breakroleinheritance(copyRoleAssignments=false,clearSubscopes=true)";
        return this._dao.auth.ensureRequestDigest().then(function (digest) { 
            var customOptions = {
                headers: utils.headers.getDeleteHeaders(digest),
            };
            
            return _this._dao.post(url, "", customOptions);
        })
    }

    Web.prototype.clearFolderPermissionRoleForGroup = function (fileUrl, targetId){
        var _this = this;
        var url = this.baseUrl + "/GetFolderByServerRelativeUrl('"+fileUrl+"')/ListItemAllFields/roleassignments/getbyprincipalid('"+targetId+"')"
        return this._dao.auth.ensureRequestDigest().then(function (digest) {         
            var customOptions = {
                headers: utils.headers.getDeleteHeaders(digest),
            };
            return _this._dao.post(url, "", customOptions);
        })
    }
    
    Web.prototype.assignPermissionRoleForFolder = function (fileUrl, permissionId, targetId){
        var _this = this;
        var url = this.baseUrl + "/GetFolderByServerRelativeUrl('"+fileUrl+"')/ListItemAllFields/roleassignments/addroleassignment(principalid="+targetId+",roleDefId="+permissionId+")"
        return this._dao.auth.ensureRequestDigest().then(function (digest) {         
            return _this._dao.post(url);
        })
    }

    



    // TODO: getFolder
    // TODO: uploadFile
    // TODO: fileAction
    // TODO: deleteFile
    /** Copies a file from one server relative url to another */
    Web.prototype.copyFile = function (sourceUrl, destinationUrl, digest) {
        var _this = this;
        return this._dao.auth
            .ensureRequestDigest(digest)
            .then(function (digest) { return _this._copyFile(sourceUrl, destinationUrl, digest); });
    };
    return Web;
}());
export default Web;
