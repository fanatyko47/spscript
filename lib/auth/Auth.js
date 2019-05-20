import utils from "../utils/index";
var Auth = /** @class */ (function () {
    function Auth(ctx) {
        this.ctx = ctx;
    }
    Auth.prototype.ensureRequestDigest = function (digest) {
        return digest ? Promise.resolve(digest) : this.getRequestDigest();
    };
    /** Get a Request Digest token to authorize a request */
    Auth.prototype.getRequestDigest = function () {
        return this.ctx
            .post("/contextInfo", {})
            .then(function (data) { return data["d"].GetContextWebInformation.FormDigestValue; });
    };
    Auth.prototype.getGraphToken = function () {
        var endpoint = "/SP.OAuth.Token/Acquire";
        return this.ctx
            .authorizedPost(endpoint, { resource: "https://graph.microsoft.com" })
            .then(utils.validateODataV2);
    };
    return Auth;
}());
export default Auth;
