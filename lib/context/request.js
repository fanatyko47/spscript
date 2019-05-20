import utils from "../utils";
var defaults = {
    method: "GET",
    credentials: "include",
    redirect: "follow"
};
var request = function (url, options) {
    var opts = Object.assign({}, defaults, options);
    return fetch(url, opts).then(function (resp) {
        var succeeded = resp.ok;
        if (!resp.ok) {
            return resp.text().then(function (err) {
                throw new Error(err);
            });
        }
        return resp.text().then(function (text) {
            return utils.parseJSON(text) || text;
        });
    });
};
export default request;
