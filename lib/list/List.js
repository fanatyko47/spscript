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
import utils from "../utils";
import Securable from "../permissions/Securable";
var List = /** @class */ (function () {
    function List(name, ctx) {
        this.listName = name;
        this.baseUrl = "/web/lists/getbytitle('" + this.listName + "')";
        this._dao = ctx;
        this.permissions = new Securable(this.baseUrl, ctx);
    }
    /** Get items from the list. Will return all items if no OData is passed. */
    List.prototype.getItems = function (odata) {
        return this._dao.get(this.baseUrl + "/items" + appendOData(odata)).then(utils.validateODataV2);
    };
    /** Get a specific item by SharePoint ID */
    List.prototype.getItemById = function (id, odata) {
        var url = this.baseUrl + "/items(" + id + ")" + appendOData(odata);
        return this._dao.get(url).then(utils.validateODataV2);
    };
    /** Gets the items returned by the specified CAML query. CAML should be something like <View><Query><Where>...</Where></Query></View>*/
    List.prototype.getItemsByCaml = function (caml) {
        var queryUrl = this.baseUrl + "/GetItems";
        var postBody = {
            query: {
                __metadata: {
                    type: "SP.CamlQuery",
                },
                ViewXml: caml,
            },
        };
        return this._dao.authorizedPost(queryUrl, postBody).then(utils.validateODataV2);
    };
    /** Gets the items returned by the specified View name */
    List.prototype.getItemsByView = function (viewName) {
        var _this = this;
        var viewUrl = this.baseUrl + "/Views/getByTitle('" + viewName + "')/ViewQuery";
        // 1. Get the targeted view on the targeted list so we can pull out the ViewXml
        return this._dao
            .get(viewUrl)
            .then(utils.validateODataV2)
            .then(function (view) { return _this.getItemsByCaml(view.ViewQuery); });
    };
    /** Gets you all items whose field(key) matches the value. Currently only text and number columns are supported. */
    List.prototype.findItems = function (key, value, odata) {
        var filterValue = typeof value === "string" ? "'" + value + "'" : value;
        odata = "$filter=" + key + " eq " + filterValue + appendOData(odata, "&");
        return this.getItems(odata);
    };
    /** Get the item whose field(key) matches the value. If multiple matches are found, the first is returned. Currently only text and number columns are supported. */
    List.prototype.findItem = function (key, value, odata) {
        if (odata === void 0) { odata = ""; }
        // Add a top=1 if there wasn't a specified top
        if (odata.indexOf("$top") === -1) {
            odata += odata ? "&$top=1" : "$top=1";
        }
        return this.findItems(key, value, odata).then(function (items) {
            if (items && items.length && items.length > 0)
                return items[0];
            return null;
        });
    };
    /** Get all the properties of the List */
    List.prototype.getInfo = function () {
        return this._dao.get(this.baseUrl).then(utils.validateODataV2);
    };
    /** Check whether the list exists */
    List.prototype.checkExists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getInfo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** Insert a List Item */
    List.prototype.addItem = function (item, digest) {
        var _this = this;
        return this._dao.auth.ensureRequestDigest(digest).then(function (digest) {
            return _this._dao
                .get(_this.baseUrl)
                .then(function (data) {
                //decorate the item with the 'type' metadata
                item = Object.assign({}, {
                    __metadata: {
                        type: data["d"].ListItemEntityTypeFullName,
                    },
                }, item);
                var customOptions = {
                    headers: utils.headers.getAddHeaders(digest),
                };
                return _this._dao.post(_this.baseUrl + "/items", item, customOptions);
            })
                .then(utils.validateODataV2);
        });
    };
    /** Takes a SharePoint Id, and updates that item ONLY with properties that are found in the passed in updates object. */
    List.prototype.updateItem = function (itemId, updates, digest) {
        var _this = this;
        return this._dao.auth.ensureRequestDigest(digest).then(function (digest) {
            return _this.getItemById(itemId).then(function (item) {
                //decorate the item with the 'type' metadata
                updates = Object.assign({}, {
                    __metadata: {
                        type: item["__metadata"].type,
                    },
                }, updates);
                var customOptions = {
                    headers: utils.headers.getUpdateHeaders(digest, item["__metadata"].etag),
                };
                var updateUri = _this.baseUrl + "/items(" + itemId + ")";
                return _this._dao.post(updateUri, updates, customOptions);
            });
        });
    };
    /** deletes the item with the specified SharePoint Id */
    List.prototype.deleteItem = function (itemId, digest) {
        var _this = this;
        return this._dao.auth.ensureRequestDigest(digest).then(function (digest) {
            return _this.getItemById(itemId).then(function (item) {
                var customOptions = {
                    headers: utils.headers.getDeleteHeaders(digest, item["__metadata"].etag),
                };
                var deleteUri = _this.baseUrl + "/items(" + itemId + ")";
                return _this._dao.post(deleteUri, "", customOptions);
            });
        });
    };
    List.prototype.deleteItemsWithKey = function (keyField, key, digest) {
        var _this = this;
        return this._dao.auth.ensureRequestDigest(digest).then(function (digest) {
            return _this.findItems(keyField, key).then(function (items) {
                return Promise.all(items.map(function (item) {
                    var customOptions = {
                        headers: utils.headers.getDeleteHeaders(digest, item["__metadata"].etag),
                    };
                    var deleteUri = _this.baseUrl + "/items(" + item.Id + ")";
                    return _this._dao.post(deleteUri, "", customOptions);
                }));
            });
        });
    };
    
     /** Find all attachments by item list id */
     List.prototype.getItemAttachmentsById = function (id) {
        var url = this.baseUrl + "/items(" + id + ")/AttachmentFiles";
        return this._dao.get(url).then(utils.validateODataV2);
    };

    /**Delete item attachment */
    List.prototype.deleteItemAttachment = function( id, title, digest ){
        var _this = this;
        return this._dao.auth.ensureRequestDigest(digest).then(function (digest) {
            var customOptions = {
                headers: utils.headers.getActionHeaders("DELETE",digest)
            };
            var attachmentDeleteUri = _this.baseUrl + "/items(" + id + ")/AttachmentFiles/getByFileName('" + title + "')"; 
            return _this._dao.actionPost(attachmentDeleteUri, "", customOptions);
           
        });
    }

    /** adds attachment to item list */

    List.prototype.addItemAttachment = function (id, attach, digest) {
        var _this = this;
        return this._dao.auth.ensureRequestDigest(digest).then(function (digest) {
            utils.getArrayBuffer(attach)
            .then((convertedFile) => {
                var arrayBuff = convertedFile; 
                var decoded = String.fromCharCode(...new Uint8Array(arrayBuff));
                  
                var url = _this._dao.webUrl.replace( ` `, `` )

                var attachmentAddUri = ( url !== '' ? ( url + '/' ) : '' ) + "_api" + _this.baseUrl + "/items(" + id + ")/AttachmentFiles/add(FileName='"+attach.name+"')"; 
                utils.loadScript("/_layouts/15/SP.RequestExecutor.js")
                .then(() => {
                    return new Promise(function(resolve,reject){
                        var executor = new SP.RequestExecutor("/");
                        executor.executeAsync(
                            {
                                url: attachmentAddUri,
                                method: "POST",
                                body: decoded,
                                binaryStringRequestBody: true,
                                headers: {
                                    "accept": "application/json;odata=verbose"
                                },
                                success: (response) => {
                                    resolve("Dodano plik !"+response)
                                },
                                error: (response) => {
                                    reject("Błąd dodawania pliku !"+response)
                                }
                        });
                    })
                   
                   
                    
                })
            })
            
            
              
        });
    };
    return List;
}());
export default List;
var appendOData = function (odata, prefix) {
    prefix = prefix || "?";
    if (odata)
        return prefix + odata;
    return "";
};
