import { toObj, fromObj } from "./queryString";
import headerUtils from "./headers";
import { loadScript, loadScripts, loadCSS } from "./loaders";
import { validateNamespace, waitForLibraries, waitForLibrary, waitForElement, } from "./dependencyManagement";
function isBrowser() {
    return !(typeof window === "undefined");
}
function parseJSON(data) {
    if (typeof data === "string") {
        try {
            data = JSON.parse(data);
        }
        catch (e) {
            return null;
        }
    }
    return data;
}
var getArrayBuffer = function (file) {
    if (file && file instanceof File) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            reader.readAsArrayBuffer(file);
        });
    }
    else {
        throw "SPScript.utils.getArrayBuffer: Cant get ArrayBuffer if you don't pass in a file";
    }
};
function validateODataV2(data) {
    data = parseJSON(data);
    var results = null;
    if (data.d && data.d.results && data.d.results.length != null) {
        results = data.d.results;
    }
    else if (data.d) {
        results = data.d;
    }
    return results || data;
}
function openModal(url, modalOptions) {
    ensureModalLibrary().then(function () {
        var defaults = {
            title: " ",
        };
        var options = Object.assign({}, defaults, modalOptions, { url: url });
        return SP.UI.ModalDialog.showModalDialog(options);
    });
}
var ensureModalLibrary = function () {
    if (!validateNamespace("SP.UI.ModalDialog")) {
        return loadScript("/_layouts/15/1033/sp.res.js").then(function () {
            return loadScript("/_layouts/15/sp.ui.dialog.js");
        });
    }
    return Promise.resolve(true);
};
export function checkIsSharePointLink(url) {
    return url && url.search(/\.sharepoint\.com/i) > -1;
}
export function getSiteUrl(url) {
    url = (url || window.location.href).toLowerCase();
    var managedPathIndex = url.search(/\/sites\/|\/teams\//i);
    if (!checkIsSharePointLink(url) || managedPathIndex < 0)
        return null;
    var siteUrl = url;
    var trailingCharIndexes = [
        url.indexOf("/", managedPathIndex + 7),
        url.indexOf("?", managedPathIndex + 7),
        url.indexOf("#", managedPathIndex + 7),
    ].filter(function (i) { return i > -1; });
    var targetIndex = Math.min.apply(Math, trailingCharIndexes);
    if (targetIndex > -1) {
        siteUrl = url.substring(0, targetIndex);
    }
    return siteUrl;
}
export function getTenant(url) {
    if (!url)
        url = window.location.href;
    url = url.toLowerCase();
    if (!checkIsSharePointLink(url))
        return null;
    var sharepointIndex = url.indexOf(".sharepoint");
    // Substring, start after https://, and at the '.sharepoint'
    var subdomain = url.substring(8, sharepointIndex);
    // support stuff like https://mytenant-admin.sharepoint.com and https://mytenant-my.sharepoint.com
    return subdomain.split("-")[0];
}
var utils = {
    isBrowser: isBrowser,
    headers: headerUtils,
    parseJSON: parseJSON,
    validateODataV2: validateODataV2,
    parseOData: validateODataV2,
    qs: { toObj: toObj, fromObj: fromObj },
    loadScript: loadScript,
    loadScripts: loadScripts,
    loadCSS: loadCSS,
    getArrayBuffer: getArrayBuffer,
    waitForLibraries: waitForLibraries,
    waitForLibrary: waitForLibrary,
    validateNamespace: validateNamespace,
    waitForElement: waitForElement,
    openModal: openModal,
    getTenant: getTenant,
    getSiteUrl: getSiteUrl,
};
export default utils;
