import utils from "../utils";
import Context from "../context/Context";
import Securable from "../permissions/Securable";

export default class List {
	/** The title of the list */
	listName: string;
	private baseUrl: string;
	private _dao: Context;
	permissions: Securable;
	constructor(name: string, ctx: Context) {
		this.listName = name;
		this.baseUrl = `/web/lists/getbytitle('${this.listName}')`;
		this._dao = ctx;
		this.permissions = new Securable(this.baseUrl, ctx);
	}
	/** Get items from the list. Will return all items if no OData is passed. */
	getItems(odata?: string): Promise<any> {
		return this._dao.get(this.baseUrl + "/items" + appendOData(odata)).then(utils.validateODataV2);
	}

	/** Get a specific item by SharePoint ID */
	getItemById(id: number, odata?: string) {
		var url = this.baseUrl + "/items(" + id + ")" + appendOData(odata);
		return this._dao.get(url).then(utils.validateODataV2);
	}

	/** Gets the items returned by the specified View name */
	getItemsByView(viewName: string) {
		var viewUrl = this.baseUrl + "/Views/getByTitle('" + viewName + "')/ViewQuery";
		// 1. Get the targeted view on the targeted list so we can pull out the ViewXml
		return this._dao
			.get(viewUrl)
			.then(utils.validateODataV2)
			.then(view => {
				// Now that we found the view, craft a POST request the the /GetItems endpoint
				var queryUrl = this.baseUrl + "/GetItems";
				var postBody = {
					query: {
						__metadata: {
							type: "SP.CamlQuery",
						},
						ViewXml: view.ViewQuery,
					},
				};
				return this._dao.authorizedPost(queryUrl, postBody);
			})
			.then(utils.validateODataV2);
	}

	/** Gets you all items whose field(key) matches the value. Currently only text and number columns are supported. */
	findItems(key: string, value: any, odata?: string) {
		var filterValue = typeof value === "string" ? "'" + value + "'" : value;
		odata = "$filter=" + key + " eq " + filterValue + appendOData(odata, "&");
		return this.getItems(odata);
	}

	/** Get the item whose field(key) matches the value. If multiple matches are found, the first is returned. Currently only text and number columns are supported. */
	findItem(key: string, value: any, odata?: string) {
		return this.findItems(key, value, odata).then(items => {
			if (items && items.length && items.length > 0) return items[0];
			return null;
		});
	}

	/** Get all the properties of the List */
	getInfo(): Promise<any> {
		return this._dao.get(this.baseUrl).then(utils.validateODataV2);
	}

	/** Insert a List Item */
	addItem(item: any, digest?: string): Promise<any> {
		return this._dao.auth.ensureRequestDigest(digest).then(digest => {
			return this._dao
				.get(this.baseUrl)
				.then(data => {
					//decorate the item with the 'type' metadata
					item = Object.assign(
						{},
						{
							__metadata: {
								type: data["d"].ListItemEntityTypeFullName,
							},
						},
						item
					);

					var customOptions = {
						headers: utils.headers.getAddHeaders(digest),
					};
					return this._dao.post(this.baseUrl + "/items", item, customOptions);
				})
				.then(utils.validateODataV2);
		});
	}

	/** Takes a SharePoint Id, and updates that item ONLY with properties that are found in the passed in updates object. */
	updateItem(itemId: number, updates: any, digest?: string) {
		return this._dao.auth.ensureRequestDigest(digest).then(digest => {
			return this.getItemById(itemId).then(item => {
				//decorate the item with the 'type' metadata
				updates = Object.assign(
					{},
					{
						__metadata: {
							type: item["__metadata"].type,
						},
					},
					updates
				);

				var customOptions = {
					headers: utils.headers.getUpdateHeaders(digest, item["__metadata"].etag),
				};

				return this._dao.post(item["__metadata"].uri, updates, customOptions);
			});
		});
	}

	/** deletes the item with the specified SharePoint Id */
	deleteItem(itemId: number, digest?: string) {
		return this._dao.auth.ensureRequestDigest(digest).then(digest => {
			return this.getItemById(itemId).then(item => {
				var customOptions = {
					headers: utils.headers.getDeleteHeaders(digest, item["__metadata"].etag),
				};
				return this._dao.post(item["__metadata"].uri, "", customOptions);
			});
		});
	}

	//TODO: getFields
	//TODO: getField
	//TODO: updateField
}

var appendOData = function(odata?: string, prefix?: string) {
	prefix = prefix || "?";
	if (odata) return prefix + odata;
	return "";
};
