import utils from "../utils";
import Context from "../context/Context";
import { QueryOptions, Refiner, SearchResultResponse } from "./ISearch";
import { mapResponse } from "./searchMappers";

export default class Search {
	private _dao: Context;

	constructor(ctx: Context) {
		this._dao = ctx;
	}

	/** get default/empty QueryOptions */
	get defaultQueryOptions(): QueryOptions {
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
	}

	/** Query the SP Search Service */
	query(queryText: string, queryOptions: QueryOptions = {}): Promise<SearchResultResponse> {
		var optionsQueryString = utils.qs.fromObj(queryOptions, true);
		var url = `/search/query?querytext='${queryText}'&${optionsQueryString}`;
		return this._dao
			.get(url)
			.then(utils.validateODataV2)
			.then(resp => {
				if (resp.query) return mapResponse(resp.query);
				throw new Error("Invalid response back from search service");
			});
	}

	/** Query for only People results */
	people(queryText: string, queryOptions: QueryOptions = {}): Promise<SearchResultResponse> {
		queryOptions.sourceid = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
		return this.query(queryText, queryOptions);
	}

	/** Query for only sites (STS_Web). Optionally pass in a url scope. */
	sites(
		queryText: string = "",
		urlScope: string = "",
		queryOptions: QueryOptions = {}
	): Promise<SearchResultResponse> {
		urlScope = urlScope ? `Path:${urlScope}*` : "";
		var query = `${queryText} contentclass:STS_Web ${urlScope}`.trim();
		queryOptions.rowlimit = queryOptions.rowlimit || 499;
		return this.query(query, queryOptions);
	}
}
