import utils from "../utils";
var Profiles = /** @class */ (function () {
    function Profiles(ctx) {
        this._dao = ctx;
        this.baseUrl = "/SP.UserProfiles.PeopleManager";
    }
    /** Gets the profile of the current user.  */
    Profiles.prototype.current = function () {
        var url = this.baseUrl + "/GetMyProperties";
        return this._dao.get(url).then(utils.validateODataV2).then(transformPersonProperties);
    };
    Profiles.prototype.get = function (user) {
        var _this = this;
        if (!user)
            return this.current();
        return this.getUserObj(user).then(function (user) {
            var login = encodeURIComponent(user.LoginName || user.AccountName);
            var url = _this.baseUrl + "/GetPropertiesFor(accountName=@v)?@v='" + login + "'";
            return _this._dao.get(url).then(utils.validateODataV2).then(transformPersonProperties);
        });
    };
    Profiles.prototype.getUserObj = function (user) {
        if (!user || typeof user === "string") {
            return this._dao.web.getUser(user);
        }
        else if (user.AccountName || user.LoginName) {
            return Promise.resolve(user);
        }
        else
            throw new Error("profiles.setProperty Error: Invalid user parameter");
    };
    Profiles.prototype.setProperty = function (key, value, user) {
        var _this = this;
        return this.getUserObj(user).then(function (user) {
            var args = {
                propertyName: key,
                propertyValue: value,
                accountName: user.LoginName || user.AccountName
            };
            var url = _this.baseUrl + "/SetSingleValueProfileProperty";
            return _this._dao.authorizedPost(url, args);
        });
    };
    return Profiles;
}());
export default Profiles;
var transformPersonProperties = function (profile) {
    profile.UserProfileProperties.results.forEach(function (keyvalue) {
        profile[keyvalue.Key] = keyvalue.Value;
    });
    return profile;
};
