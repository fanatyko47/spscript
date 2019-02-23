import { toObj, fromObj } from "./queryString.js";
import headerUtils from "./headers.js";
import { loadScript, loadScripts, loadCSS } from "./loaders.js";
import { validateNamespace, waitForLibraries, waitForLibrary, waitForElement } from "./dependencyManagement.js";

function isBrowser() {
  return !(typeof window === "undefined");
}

function parseJSON(data) {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch (e) {
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
  } else {
    throw "SPScript.utils.getArrayBuffer: Cant get ArrayBuffer if you don't pass in a file";
  }
};

function validateODataV2(data) {
  data = parseJSON(data);
  var results = null;

  if (data.d && data.d.results && data.d.results.length != null) {
    results = data.d.results;
  } else if (data.d) {
    results = data.d;
  }

  return results || data;
}

function openModal(url, modalOptions) {
  ensureModalLibrary().then(() => {
    var defaults = {
      title: " "
    };
    var options = Object.assign({}, defaults, modalOptions, {
      url
    });
    return SP.UI.ModalDialog.showModalDialog(options);
  });
}

var ensureModalLibrary = function () {
  if (!validateNamespace("SP.UI.ModalDialog")) {
    return loadScript("/_layouts/15/1033/sp.res.js").then(() => loadScript("/_layouts/15/sp.ui.dialog.js"));
  }

  return Promise.resolve(true);
};

var utils = {
  isBrowser,
  headers: headerUtils,
  parseJSON,
  validateODataV2,
  qs: {
    toObj,
    fromObj
  },
  loadScript,
  loadScripts,
  loadCSS,
  getArrayBuffer,
  waitForLibraries,
  waitForLibrary,
  validateNamespace,
  waitForElement,
  openModal
};
export default utils;