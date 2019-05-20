var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import request from "./request";
import utils from "../utils/index";
import List from "../list/List";
import Web from "../web/Web";
import Search from "../search/Search";
import CustomActions from "../customActions/CustomActions";
import Profiles from "../profiles/Profiles";
import { getAppOnlyToken } from "./tokenHelper";
import Auth from "../auth/Auth";
var Context = /** @class */ (function () {
    function Context(url, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.webUrl = url;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.accessToken = options.token;
        this.headers = options.headers;
        // TODO serverside: replace with tokenHelper.getAppOnlyToken(this.webUrl, this.clientKey, this.clientSecret).then(token => this.accessToken = token);
        this.ensureToken = options.clientSecret
            ? getAppOnlyToken(url, options.clientId, options.clientSecret).then(function (token) { return (_this.accessToken = token); })
            : Promise.resolve(this.accessToken || true);
        this.search = new Search(this);
        this.customActions = new CustomActions(this);
        this.web = new Web(this);
        this.profiles = new Profiles(this);
        this.auth = new Auth(this);
    }
    Context.prototype.executeRequest = function (url, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var fullUrl, defaultOptions, requestOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureToken];
                    case 1:
                        _a.sent();
                        fullUrl = /^http/i.test(url) ? url : this.webUrl + "/_api" + url;
                        defaultOptions = {
                            method: "GET",
                            headers: __assign({ Accept: "application/json; odata=verbose", "Content-Type": "application/json; odata=verbose" }, this.headers),
                        };
                        requestOptions = __assign({}, defaultOptions, opts, { headers: __assign({}, defaultOptions.headers, opts.headers) });
                        if (this.accessToken) {
                            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
                        }
                        return [2 /*return*/, request(fullUrl, requestOptions)];
                }
            });
        });
    };
    /** Make a 'GET' request to the '<site>/_api' relative url. */
    Context.prototype.get = function (url, opts) {
        var options = Object.assign({}, { method: "GET" }, opts);
        return this.executeRequest(url, options).then(utils.parseJSON);
    };
    /** Make a 'POST' request to the '<site>/_api' relative url. */
    Context.prototype.post = function (url, body, opts) {
        body = this._packagePostBody(body, opts);
        var options = {
            method: "POST",
            body: body,
        };
        options = Object.assign({}, options, opts);
        return this.executeRequest(url, options).then(utils.parseJSON);
    };
    /**Make a POST request without body for delete purposes */
    Context.prototype.actionPost = function (url, body, opts) {
        body = this._packagePostBody(body, opts);
        var options = {
            method: "POST",
        };
        options = Object.assign({}, options, opts);
        return this.executeRequest(url, options).then(utils.parseJSON);
    };

    /** Make a 'POST' request to the '<site>/_api' relative url. SPScript will handle authorizing the request for you.*/
    Context.prototype.authorizedPost = function (url, body, verb) {
        var _this = this;
        return this.auth
            .getRequestDigest()
            .then(function (digest) { return utils.headers.getActionHeaders(verb, digest); })
            .then(function (headers) { return _this.post(url, body, { headers: headers }); });
    };
    /** Get an SPScript List instance */
    Context.prototype.lists = function (name) {
        return new List(name, this);
    };
    Context.prototype._packagePostBody = function (body, opts) {
        // if its already a string just return
        if (typeof body === "string")
            return body;
        // if it has an explicit content-type, asssume the body is already that type
        if (opts &&
            opts.headers &&
            opts.headers["Content-Type"] &&
            opts.headers["Content-Type"].indexOf("json") === -1) {
            return body;
        }
        //others stringify
        return JSON.stringify(body);
    };
    return Context;
}());
export default Context;
