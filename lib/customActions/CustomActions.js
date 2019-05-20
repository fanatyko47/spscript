import utils from "../utils";
import { metadata, scopes } from "./ICustomActions";
var CustomActions = /** @class */ (function () {
    function CustomActions(ctx) {
        this._dao = ctx;
    }
    CustomActions.prototype.getScope = function (scopeId) {
        if (scopeId === 3)
            return scopes.Web;
        if (scopeId === 2)
            return scopes.Site;
        throw new Error("Invalid Custom Action Scope");
    };
    CustomActions.prototype.get = function (name) {
        var _this = this;
        // first get the site scoped ones, then the web scoped ones
        return this._dao.get(scopes.Site.url)
            .then(utils.validateODataV2)
            .then(function (siteCustomActions) {
            return _this._dao.get(scopes.Web.url)
                .then(utils.validateODataV2)
                //combine site scoped and web scoped into single array
                .then(function (webCustomActions) { return siteCustomActions.concat(webCustomActions); });
        })
            .then(function (customActions) {
            // if a name was passed filter it otherwise return everything
            if (name) {
                var matches = customActions.filter(function (a) { return a.Name === name; });
                if (matches.length) {
                    return matches[0];
                }
                throw new Error("Unable to find Custom Action with name: " + name);
            }
            else
                return customActions;
        });
    };
    /** Gets the API url of a specific Custom Action */
    CustomActions.prototype._getUrl = function (name) {
        var _this = this;
        return this.get(name)
            .then(function (a) { return _this.getScope(a.Scope).url + "('" + a.Id + "')"; });
    };
    CustomActions.prototype._getUrlAndDigest = function (name) {
        var _this = this;
        var prep = {};
        return this._getUrl(name)
            .then(function (url) {
            prep.url = url;
            return _this._dao.auth.getRequestDigest();
        })
            .then(function (digest) {
            prep.digest = digest;
            return prep;
        });
    };
    /** Update an existing Custom Action. You must pass a custom action with a 'Name' property */
    CustomActions.prototype.update = function (updates) {
        var _this = this;
        if (!updates || !updates.Name)
            throw new Error("You must at least pass a Custom Action 'Name'");
        return this._getUrlAndDigest(updates.Name)
            .then(function (prep) {
            updates = Object.assign({}, metadata, updates);
            var opts = {
                headers: utils.headers.getUpdateHeaders(prep.digest)
            };
            return _this._dao.post(prep.url, updates, opts);
        });
    };
    /** Remove an existing Custom Action. Searches both Site and Web scoped */
    CustomActions.prototype.remove = function (name) {
        var _this = this;
        if (!name)
            throw new Error("You must at least pass an existing Custom Action name");
        return this._getUrlAndDigest(name)
            .then(function (prep) {
            var opts = {
                headers: utils.headers.getDeleteHeaders(prep.digest)
            };
            return _this._dao.post(prep.url, {}, opts);
        });
    };
    /** Adds a new custom action. If the custom action name already exists, it will be deleted first */
    CustomActions.prototype.add = function (customAction) {
        var _this = this;
        if (!customAction || !customAction.Name)
            throw new Error("You must at least pass a Custom Action 'Name'");
        var defaults = {
            Name: customAction.Name,
            Title: customAction.Name,
            Description: customAction.Name,
            // Group: customAction.Name,
            Sequence: 100,
            Scope: "Site",
            Location: "ScriptLink",
        };
        customAction = Object.assign({}, defaults, customAction);
        // if it exists already, delete it
        return this.get()
            .then(function (existingCustomActions) {
            if (existingCustomActions.filter(function (ca) { return ca.Name === customAction.Name; }).length) {
                return _this.remove(customAction.Name);
            }
            return true;
        })
            .then(function () { return _this._dao.auth.getRequestDigest(); })
            .then(function (digest) {
            customAction = Object.assign({}, metadata, customAction);
            var scope = scopes[customAction.Scope];
            customAction.Scope = scope.id;
            var opts = {
                headers: utils.headers.getAddHeaders(digest)
            };
            return _this._dao.post(scope.url, customAction, opts);
        });
    };
    CustomActions.prototype.addScriptBlock = function (name, block, opts) {
        if (opts === void 0) { opts = {}; }
        var customAction = {
            Name: name,
            ScriptBlock: block,
            Group: name,
        };
        customAction = Object.assign({}, customAction, opts);
        return this.add(customAction);
    };
    /** Injects a CSS file onto your site. Defaults to Site scoped */
    CustomActions.prototype.addCSSLink = function (name, url, opts) {
        if (opts === void 0) { opts = {}; }
        var scriptBlockStr = "\n\t\t(function() {\n\t\t\tvar head = document.querySelector(\"head\");\n\t\t\tvar styleTag = document.createElement(\"style\");\n\t\t\tstyleTag.appendChild(document.createTextNode(\"body { opacity: 0 }\"));\n\t\t\t\n\t\t\tvar linkTag = document.createElement(\"link\");\n\t\t\tlinkTag.rel = \"stylesheet\";\tlinkTag.href = \"" + url + "\"; linkTag.type = \"text/css\";\n\t\t\tlinkTag.addEventListener(\"load\", function() {\n\t\t\t\thead.removeChild(styleTag);\n\t\t\t});\n\n\t\t\thead.appendChild(styleTag);\n\t\t\thead.appendChild(linkTag);\n\t\t})();";
        return this.addScriptBlock(name, scriptBlockStr, opts);
    };
    CustomActions.prototype.addScriptLink = function (name, url, opts) {
        if (opts === void 0) { opts = {}; }
        var scriptBlockStr = "\n\t\t(function() {\n\t\t\tvar head = document.querySelector(\"head\");\n\t\t\tvar scriptTag = document.createElement(\"script\");\n            scriptTag.src = \"" + url + "\";\n            scriptTag.type = \"text/javascript\";\n\t\t\thead.appendChild(scriptTag);\n\t\t})();";
        return this.addScriptBlock(name, scriptBlockStr, opts);
    };
    return CustomActions;
}());
export default CustomActions;
;
