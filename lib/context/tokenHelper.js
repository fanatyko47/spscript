import { parse as parseUrl } from "url";
import * as querystring from "querystring";
import request from "./request";
export var getAppOnlyToken = function (url, clientId, clientSecret) {
    var urlParts = parseUrl(url);
    return getRealm(url).then(function (authParams) {
        var tokenUrl = "https://accounts.accesscontrol.windows.net/" + authParams.realm + "/tokens/OAuth/2";
        var client_id = clientId + "@" + authParams.realm;
        var resource = authParams.client_id + "/" + urlParts.host + "@" + authParams.realm;
        var postBody = {
            grant_type: "client_credentials",
            client_id: client_id,
            client_secret: clientSecret,
            resource: resource,
            scope: resource
        };
        var bodyStr = querystring.stringify(postBody);
        var opts = {
            method: "POST",
            body: bodyStr,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": bodyStr.length
            }
        };
        return request(tokenUrl, opts).then(function (data) {
            return data.access_token;
        });
    });
};
var getRealm = function (url) {
    var endpointUrl = url + "/_api/web";
    var opts = {
        method: "GET",
        headers: {
            Authorization: "Bearer ",
            Accept: "application/json;odata=verbose",
            response_type: "code"
        }
    };
    return new Promise(function (resolve, reject) {
        fetch(endpointUrl, opts).then(function (res) {
            if (!res.ok) {
                var realm = parseRealm(getWWWAuthenticate(res.headers));
                resolve(realm);
            }
            //this should fail
            reject("Get Realm succeeded somehow?!");
        });
    });
};
var getWWWAuthenticate = function (headers) {
    var key = "www-authenticate";
    if (typeof headers[key] === "string")
        return headers[key];
    if (headers._headers && Array.isArray(headers._headers[key])) {
        return headers._headers[key][0];
    }
    if (headers.map && Array.isArray(headers.map[key])) {
        return headers.map[key][0];
    }
};
var parseRealm = function (raw) {
    var bearer = "Bearer realm=";
    if (raw && raw.startsWith("Bearer")) {
        raw = raw.substr(7);
        var params = raw.split(",").filter(function (p) { return p.indexOf("=") > -1; }).reduce(function (params, piece) {
            var parts = piece.split("=");
            if (parts.length === 2) {
                params[parts[0].trim()] = parts[1].trim().replace(/\"/g, "");
            }
            return params;
        }, {});
        return params;
    }
    return null;
};
