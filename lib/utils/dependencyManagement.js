export var validateNamespace = function (namespace) {
    var scope = window;
    var sections = namespace.split(".");
    var sectionsLength = sections.length;
    for (var i = 0; i < sectionsLength; i++) {
        var prop = sections[i];
        if (prop in scope) {
            scope = scope[prop];
        }
        else {
            return false;
        }
    }
    return true;
};
var _waitForLibraries = function (namespaces, resolve) {
    var missing = namespaces.filter(function (namespace) { return !validateNamespace(namespace); });
    if (missing.length === 0)
        resolve();
    else
        setTimeout(function () { return _waitForLibraries(namespaces, resolve); }, 25);
};
export var waitForLibraries = function (namespaces) {
    return new Promise(function (resolve, reject) { return _waitForLibraries(namespaces, resolve); });
};
export var waitForLibrary = function (namespace) {
    return waitForLibraries([namespace]);
};
export var waitForElement = function (selector, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    var counter = 0;
    var INTERVAL = 25; //milliseconds
    var MAX_ATTEMPTS = timeout / INTERVAL; // eventually give up
    return new Promise(function (resolve, reject) {
        var _waitForElement = function () {
            if (counter > MAX_ATTEMPTS)
                reject("Unable to find element: " + selector);
            var elem = document.querySelector(selector);
            if (!elem) {
                counter++;
                setTimeout(_waitForElement, INTERVAL);
            }
            else
                resolve(elem);
        };
        _waitForElement();
    });
};
