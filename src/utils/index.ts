import { toObj, fromObj } from "./queryString";
import headerUtils, { HeaderUtils } from "./headers";
import { loadScript, loadScripts, loadCSS } from "./loaders";
import {
    validateNamespace,
    waitForLibraries,
    waitForLibrary,
    waitForElement,
} from "./dependencyManagement";

function isBrowser(): boolean {
    return !(typeof window === "undefined");
}

function parseJSON(data: any): any {
    if (typeof data === "string") {
        try {
            data = JSON.parse(data);
        } catch (e) {
            return null;
        }
    }
    return data;
}

var getArrayBuffer = function(file) {
    if (file && file instanceof File) {
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function(e: any) {
                resolve(e.target.result);
            };
            reader.readAsArrayBuffer(file);
        });
    } else {
        throw "SPScript.utils.getArrayBuffer: Cant get ArrayBuffer if you don't pass in a file";
    }
};

function validateODataV2(data: any): any {
    data = parseJSON(data);
    var results = null;
    if (data.d && data.d.results && data.d.results.length != null) {
        results = data.d.results;
    } else if (data.d) {
        results = data.d;
    }
    return results || data;
}
declare var SP: any;
function openModal(url: string, modalOptions?: any) {
    ensureModalLibrary().then(() => {
        var defaults = {
            title: " ",
        };
        var options = Object.assign({}, defaults, modalOptions, { url });
        return SP.UI.ModalDialog.showModalDialog(options);
    });
}

var ensureModalLibrary = function() {
    if (!validateNamespace("SP.UI.ModalDialog")) {
        return loadScript("/_layouts/15/1033/sp.res.js").then(() =>
            loadScript("/_layouts/15/sp.ui.dialog.js")
        );
    }
    return Promise.resolve(true);
};

export function checkIsSharePointLink(url: string) {
    return url && url.search(/\.sharepoint\.com/i) > -1;
}

export function getSiteUrl(url?: string) {
    url = (url || window.location.href).toLowerCase();
    let managedPathIndex = url.search(/\/sites\/|\/teams\//i);
    if (!checkIsSharePointLink(url) || managedPathIndex < 0) return null;
    let siteUrl = url;
    let trailingCharIndexes = [
        url.indexOf("/", managedPathIndex + 7),
        url.indexOf("?", managedPathIndex + 7),
        url.indexOf("#", managedPathIndex + 7),
    ].filter(i => i > -1);
    let targetIndex = Math.min(...trailingCharIndexes);
    if (targetIndex > -1) {
        siteUrl = url.substring(0, targetIndex);
    }
    return siteUrl;
}

export function getTenant(url?: string) {
    if (!url) url = window.location.href;
    url = url.toLowerCase();
    if (!checkIsSharePointLink(url)) return null;

    let sharepointIndex = url.indexOf(".sharepoint");
    // Substring, start after https://, and at the '.sharepoint'
    let subdomain = url.substring(8, sharepointIndex);
    // support stuff like https://mytenant-admin.sharepoint.com and https://mytenant-my.sharepoint.com

    return subdomain.split("-")[0];
}

var utils = {
    isBrowser,
    headers: headerUtils,
    parseJSON,
    validateODataV2,
    parseOData: validateODataV2,
    qs: { toObj, fromObj },
    loadScript,
    loadScripts,
    loadCSS,
    getArrayBuffer,
    waitForLibraries,
    waitForLibrary,
    validateNamespace,
    waitForElement,
    openModal,
    getTenant,
    getSiteUrl,
};
export default utils;
