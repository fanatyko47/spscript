import request from "./request";
import utils from "../utils/index";
import List from "../list/List";
import Web from "../web/Web";
import Search from "../search/Search";
import CustomActions from "../customActions/CustomActions";
import Profiles from "../profiles/Profiles";
import { getAppOnlyToken } from "./tokenHelper";
import Auth from "../auth/Auth";

export interface ContextOptions {
	clientSecret?: string;
	clientId?: string;
	token?: string;
	headers?: { [any: string]: string };
}

export default class Context {
	/** The url of the SPScript data context */
	webUrl: string;
	/** Methods to hit the SP Search Service */
	search: Search;
	/** Methods against the SP Web object */
	web: Web;
	/** Methods to get the SP Profile Service */
	profiles: Profiles;
	/** Work with Site/Web scoped Custom Actions */
	customActions: CustomActions;
	/** Request Digest and Access token helpers */
	auth: Auth;

	private request: (url: string, options: RequestInit) => Promise<any>;
	private clientId: string;
	private clientSecret: string;
	private ensureToken: Promise<any>;
	private accessToken: string;
	private headers: any;

	constructor(url: string, options: ContextOptions = {}) {
		this.webUrl = url;
		this.clientId = options.clientId;
		this.clientSecret = options.clientSecret;
		this.accessToken = options.token;
		this.headers = options.headers;
		// TODO serverside: replace with tokenHelper.getAppOnlyToken(this.webUrl, this.clientKey, this.clientSecret).then(token => this.accessToken = token);
		this.ensureToken = options.clientSecret
			? getAppOnlyToken(url, options.clientId, options.clientSecret).then(token => (this.accessToken = token))
			: Promise.resolve(this.accessToken || true);

		this.search = new Search(this);
		this.customActions = new CustomActions(this);
		this.web = new Web(this);
		this.profiles = new Profiles(this);
		this.auth = new Auth(this);
	}

	private async executeRequest(url: string, opts: RequestInit = {}): Promise<any> {
		await this.ensureToken;
		var fullUrl = /^http/i.test(url) ? url : this.webUrl + "/_api" + url;
		var defaultOptions: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json; odata=verbose",
				"Content-Type": "application/json; odata=verbose",
				...this.headers,
			},
		};
		var requestOptions = {
			...defaultOptions,
			...opts,
			headers: { ...defaultOptions.headers, ...opts.headers },
		};
		if (this.accessToken) {
			requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
		}
		return request(fullUrl, requestOptions);
	}

	/** Make a 'GET' request to the '<site>/_api' relative url. */
	get(url: string, opts?: RequestInit) {
		let options: RequestInit = Object.assign({}, { method: "GET" }, opts);
		return this.executeRequest(url, options).then(utils.parseJSON);
	}

	/** Make a 'POST' request to the '<site>/_api' relative url. */
	post(url: string, body?: any, opts?: RequestInit) {
		body = this._packagePostBody(body, opts);
		var options: RequestInit = {
			method: "POST",
			body,
		};
		options = Object.assign({}, options, opts);
		return this.executeRequest(url, options).then(utils.parseJSON);
	}

	/** Make a 'POST' request to the '<site>/_api' relative url. SPScript will handle authorizing the request for you.*/
	authorizedPost(url: string, body?: any, verb?: string) {
		return this.auth
			.getRequestDigest()
			.then(digest => utils.headers.getActionHeaders(verb, digest))
			.then(headers => this.post(url, body, { headers }));
	}

	/** Get an SPScript List instance */
	lists(name: string): List {
		return new List(name, this);
	}

	private _packagePostBody(body: any, opts: RequestInit) {
		// if its already a string just return
		if (typeof body === "string") return body;
		// if it has an explicit content-type, asssume the body is already that type
		if (
			opts &&
			opts.headers &&
			opts.headers["Content-Type"] &&
			opts.headers["Content-Type"].indexOf("json") === -1
		) {
			return body;
		}
		//others stringify
		return JSON.stringify(body);
	}
}
