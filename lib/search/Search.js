import utils from "../utils";
import { mapResponse } from "./searchMappers";
var Search = /** @class */ (function () {
    function Search(ctx) {
        this._dao = ctx;
    }
    Object.defineProperty(Search.prototype, "defaultQueryOptions", {
        /** get default/empty QueryOptions */
        get: function () {
            return {
                sourceid: null,
                startrow: null,
                rowlimit: 100,
                selectedproperties: null,
                refiners: null,
                refinementfilters: null,
                hiddencontstraints: null,
                sortlist: null,
            };
        },
        enumerable: true,
        configurable: true
    });
    /** Query the SP Search Service */
    Search.prototype.query = function (queryText, queryOptions) {
        if (queryOptions === void 0) { queryOptions = {}; }
        var optionsQueryString = utils.qs.fromObj(queryOptions, true);
        var url = "/search/query?querytext='" + queryText + "'&" + optionsQueryString;
        return this._dao
            .get(url)
            .then(utils.validateODataV2)
            .then(function (resp) {
            if (resp.query)
                return mapResponse(resp.query);
            throw new Error("Invalid response back from search service");
        });
    };
    /** Query for only People results */
    Search.prototype.people = function (queryText, queryOptions) {
        if (queryOptions === void 0) { queryOptions = {}; }
        queryOptions.sourceid = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
        return this.query(queryText, queryOptions);
    };
    /** Query for only sites (STS_Web). Optionally pass in a url scope. */
    Search.prototype.sites = function (queryText, urlScope, queryOptions) {
        if (queryText === void 0) { queryText = ""; }
        if (urlScope === void 0) { urlScope = ""; }
        if (queryOptions === void 0) { queryOptions = {}; }
        urlScope = urlScope ? "Path:" + urlScope + "*" : "";
        var query = (queryText + " contentclass:STS_Web " + urlScope).trim();
        queryOptions.rowlimit = queryOptions.rowlimit || 499;
        return this.query(query, queryOptions);
    };
    return Search;
}());
export default Search;
