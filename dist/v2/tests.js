!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(t){"use strict";var e=n(8);t.Promise||(t.Promise=e),mocha.setup("bdd"),chai.should(),n(22).run(SPScript),mocha.run()}).call(e,function(){return this}())},function(t,e){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}},function(t,e){/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));return 3!==arguments.length?r[e]:void(r[e]=n)}},,,function(t,e,n){t.exports=n(27)},function(t,e,n){function r(t,e,n,r){var i={showHidden:e,seen:[],stylize:function(t){return t}};return o(i,t,"undefined"==typeof n?2:n)}function o(t,n,r){if(n&&"function"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var d=n.inspect(r);return"string"!=typeof d&&(d=o(t,d,r)),d}var m=i(t,n);if(m)return m;if(b(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion){var w=new XMLSerializer;return w.serializeToString(n)}var x="http://www.w3.org/1999/xhtml",A=document.createElementNS(x,"_");return A.appendChild(n.cloneNode(!1)),html=A.innerHTML.replace("><",">"+n.innerHTML+"<"),A.innerHTML="",html}catch(t){}}var _=v(n),E=t.showHidden?y(n):_;if(0===E.length||p(n)&&(1===E.length&&"stack"===E[0]||2===E.length&&"description"===E[0]&&"stack"===E[1])){if("function"==typeof n){var j=g(n),S=j?": "+j:"";return t.stylize("[Function"+S+"]","special")}if(f(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(l(n))return t.stylize(Date.prototype.toUTCString.call(n),"date");if(p(n))return s(n)}var T="",O=!1,P=["{","}"];if(h(n)&&(O=!0,P=["[","]"]),"function"==typeof n){var j=g(n),S=j?": "+j:"";T=" [Function"+S+"]"}if(f(n)&&(T=" "+RegExp.prototype.toString.call(n)),l(n)&&(T=" "+Date.prototype.toUTCString.call(n)),p(n))return s(n);if(0===E.length&&(!O||0==n.length))return P[0]+T+P[1];if(r<0)return f(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var I;return I=O?a(t,n,r,_,E):E.map(function(e){return u(t,n,r,_,e,O)}),t.seen.pop(),c(I,T,P)}function i(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string");case"number":return 0===e&&1/e===-(1/0)?t.stylize("-0","number"):t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean")}if(null===e)return t.stylize("null","null")}function s(t){return"["+Error.prototype.toString.call(t)+"]"}function a(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)Object.prototype.hasOwnProperty.call(e,String(s))?i.push(u(t,e,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(u(t,e,n,r,o,!0))}),i}function u(t,e,n,r,i,s){var a,u;if(e.__lookupGetter__&&(e.__lookupGetter__(i)?u=e.__lookupSetter__(i)?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):e.__lookupSetter__(i)&&(u=t.stylize("[Setter]","special"))),r.indexOf(i)<0&&(a="["+i+"]"),u||(t.seen.indexOf(e[i])<0?(u=null===n?o(t,e[i],null):o(t,e[i],n-1),u.indexOf("\n")>-1&&(u=s?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n"))):u=t.stylize("[Circular]","special")),"undefined"==typeof a){if(s&&i.match(/^\d+$/))return u;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+u}function c(t,e,n){var r=0,o=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.length+1},0);return o>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===d(t)}function f(t){return"object"==typeof t&&"[object RegExp]"===d(t)}function l(t){return"object"==typeof t&&"[object Date]"===d(t)}function p(t){return"object"==typeof t&&"[object Error]"===d(t)}function d(t){return Object.prototype.toString.call(t)}var g=n(12),y=n(39),v=n(36);t.exports=r;var b=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(h===setTimeout)return setTimeout(t,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){g&&p&&(g=!1,p.length?d=p.concat(d):y=-1,d.length&&a())}function a(){if(!g){var t=o(s);g=!0;for(var e=d.length;e;){for(p=d,d=[];++y<e;)p&&p[y].run();y=-1,e=d.length}p=null,g=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var h,f,l=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(t){h=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,d=[],g=!1,y=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new u(t,e)),1!==d.length||g||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=c,l.addListener=c,l.once=c,l.off=c,l.removeListener=c,l.removeAllListeners=c,l.emit=c,l.prependListener=c,l.prependOnceListener=c,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(t,e,n){(function(e){!function(n){function r(){}function o(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function s(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?a:u)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void u(e.promise,t)}a(e.promise,r)}))}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void f(o(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){u(t,e)}}function u(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function h(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,u(e,t))})}catch(t){if(n)return;n=!0,u(e,t)}}var l=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(r);return s(this,new h(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function r(i,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(i,t)},n)}e[i]=s,0===--o&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var o=e.length,i=0;i<e.length;i++)r(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){l(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},"undefined"!=typeof t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(10).setImmediate)},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return g[d]=r,p(d),d++}function o(t){delete g[t]}function i(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function s(t){if(y)setTimeout(s,0,t);else{var e=g[t];if(e){y=!0;try{i(e)}finally{o(t),y=!1}}}}function a(){p=function(t){e.nextTick(function(){s(t)})}}function u(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function c(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&s(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),p=function(n){t.postMessage(e+n,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;s(e)},p=function(e){t.port2.postMessage(e)}}function f(){var t=v.documentElement;p=function(e){var n=v.createElement("script");n.onreadystatechange=function(){s(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function l(){p=function(t){setTimeout(s,0,t)}}if(!t.setImmediate){var p,d=1,g={},y=!1,v=t.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(t);b=b&&b.setTimeout?b:t,"[object process]"==={}.toString.call(t.process)?a():u()?c():t.MessageChannel?h():v&&"onreadystatechange"in v.createElement("script")?f():l(),b.setImmediate=r,b.clearImmediate=o}}("undefined"==typeof self?"undefined"==typeof t?this:t:self)}).call(e,function(){return this}(),n(7))},function(t,e,n){function r(t,e){this._id=t,this._clearFn=e}var o=Function.prototype.apply;e.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(9),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e){/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){return e.length>4?e[4]:t._obj}},function(t,e){/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t){if(t.name)return t.name;var e=/^\s?function ([^(]*)\(/.exec(t);return e&&e[1]?e[1]:""}},function(t,e,n){/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependancies
	 */
var r=n(6),o=n(1);t.exports=function(t){var e=r(t),n=Object.prototype.toString.call(t);if(o.truncateThreshold&&e.length>=o.truncateThreshold){if("[object Function]"===n)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+t.length+") ]";if("[object Object]"===n){var i=Object.keys(t),s=i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", ");return"{ Object ("+s+") }"}return e}return e}},function(t,e){/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));e.__flags||(e.__flags=Object.create(null)),n=3!==arguments.length||n;for(var o in r)(n||"object"!==o&&"ssfi"!==o&&"message"!=o)&&(e.__flags[o]=r[o])}},function(t,e){/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */
/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */
function n(){function t(t,n){Object.keys(n).forEach(function(r){~e.indexOf(r)||(t[r]=n[r])})}var e=[].slice.call(arguments);return function(){for(var e=[].slice.call(arguments),n=0,r={};n<e.length;n++)t(r,e[n]);return r}}function r(t,e,r){var o=n("name","message","stack","constructor","toJSON"),i=o(e||{});this.message=t||"Unspecified AssertionError",this.showDiff=!1;for(var s in i)this[s]=i[s];r=r||arguments.callee,r&&Error.captureStackTrace&&Error.captureStackTrace(this,r)}/*!
	 * Primary Exports
	 */
t.exports=r,/*!
	 * Inherit from Error.prototype
	 */
r.prototype=Object.create(Error.prototype),/*!
	 * Statically set name
	 */
r.prototype.name="AssertionError",/*!
	 * Ensure correct constructor
	 */
r.prototype.constructor=r,r.prototype.toJSON=function(t){var e=n("constructor","toJSON","stack"),r=e({name:this.name},this);return!1!==t&&this.stack&&(r.stack=this.stack),r}},,,,,,function(t,e,n){"use strict";n(5).should();e.run=function(t){describe("var ctx = SPScript.createContext()",function(){var e=t.createContext();describe("Members",function(){it("Should create the primary object you use to interact with the site",function(){if(!e)throw new Error("Context is null");e.should.have.property("webUrl"),e.should.have.property("executeRequest"),e.should.have.property("get"),e.should.have.property("post"),e.should.have.property("authorizedPost")})}),describe("ctx.get(url, opts)",function(){var t;before(function(){t=e.get("/lists?$select=Title")}),it("Should return a Promise",function(){if(!t)throw new Error("Promise is null");t.should.have.property("then")}),it("Should resolve to a JS object, not a JSON string",function(e){t.then(function(t){t.should.have.property("d"),e()}).catch(function(t){return e(t)})}),it("Should return valid API results: ctx.get('/lists')",function(e){t.then(function(t){t.should.have.property("d"),t.d.should.have.property("results"),t.d.results.should.be.an("array"),e()}).catch(function(t){return e(t)})})}),describe("ctx.getRequestDigest()",function(){it("Should resolve to a string request digest",function(t){e.getRequestDigest().then(function(e){e.should.be.a("string"),e.should.not.be.empty,t()})})})})}},function(t,e,n){"use strict";e.run=function(t,e){console.log("SPScript Env: "+t._env);n(5).should();describe("Global Namespaces",function(){it("Should have an _env property",function(){t.should.have.property("_env"),t._env.should.be.a("string")}),it("Should have a utils namespace",function(){t.should.not.be.null,t.should.have.property("utils")}),it("Should have a createContext method",function(){t.should.have.property("createContext"),t.createContext.should.be.a("function")})}),n(24).run(t.utils),n(21).run(t);var r=t.createContext();n(23).run(r)}},function(t,e){"use strict";e.run=function(t){describe("var list = SPScript.createContext().lists(listname)",function(){this.timeout(1e4);var e=t.lists("TestList");describe("list.info()",function(){var t=null;before(function(n){e.getInfo().then(function(e){t=e,n()})}),it("Should return a promise that resolves to list info",function(){t.should.be.an("object")}),it("Should bring back list info like Title, ItemCount, and ListItemEntityTypeFullName",function(){t.should.have.property("Title"),t.should.have.property("ItemCount"),t.should.have.property("ListItemEntityTypeFullName")})}),describe("list.getItems()",function(){var t=null;before(function(n){e.getItems().then(function(e){t=e,n()})}),it("Should return a promise that resolves to an array of items",function(){t.should.be.an("array")}),it("Should return all the items in the list",function(n){e.getInfo().then(function(e){t.length.should.equal(e.ItemCount),n()})})}),describe("list.getItems(odata)",function(){var t="$filter=MyStatus eq 'Green'",n=null;before(function(r){e.getItems(t).then(function(t){n=t,r()})}),it("Should return a promise that resolves to an array of items",function(){n.should.be.an("array")}),it("Should return only items that match the OData params",function(){n.forEach(function(t){t.should.have.property("MyStatus"),t.MyStatus.should.equal("Green")})})}),describe("list.getItemById(id)",function(){var t=null,n=-1;before(function(r){e.getItems().then(function(t){return n=t[0].Id}).then(function(t){return e.getItemById(t)}).then(function(e){t=e,r()})}),it("Should return a promise that resolves to a single item",function(){t.should.be.an("object"),t.should.have.property("Title")}),it("Should resolve an item with a matching ID",function(){t.should.have.property("Id"),t.Id.should.equal(n)}),it("Should be able to return attachments using the optional odata query",function(t){e.getItemById(n,"$expand=AttachmentFiles").then(function(e){e.should.have.property("AttachmentFiles"),e.AttachmentFiles.should.have.property("results"),e.AttachmentFiles.results.should.be.an("Array"),t()})})}),describe("list.findItems(key, value)",function(){var t=null;before(function(n){e.findItems("MyStatus","Green").then(function(e){t=e,n()})}),it("Should return a promise that resolves to an array of list items",function(){t.should.be.an("array"),t.should.not.be.empty}),it("Should only bring back items the match the key value query",function(){t.forEach(function(t){t.should.have.property("MyStatus"),t.MyStatus.should.equal("Green")})})}),describe("list.findItem(key, value)",function(){var t=null;before(function(n){e.findItem("MyStatus","Green").then(function(e){t=e,n()})}),it("Should resolve to one list item",function(){t.should.be.an("object")}),it("Should only bring back an item if it matches the key value query",function(){t.should.have.property("MyStatus"),t.MyStatus.should.equal("Green")})}),describe("list.addItem()",function(){var t={Title:"Test Created Item",MyStatus:"Red"},n=null;before(function(r){e.addItem(t).then(function(t){n=t,r()}).catch(function(t){console.log(t),r()})}),it("Should return a promise that resolves with the new list item",function(){n.should.not.be.null,n.should.be.an("object"),n.should.have.property("Id")}),it("Should save the item right away so it can be queried.",function(){e.getItemById(n.Id).then(function(e){e.should.not.be.null,e.should.have.property("Title"),e.Title.should.equal(t.Title)})}),it("Should throw an error if a invalid field is set",function(n){t.InvalidColumn="test",e.addItem(t).then(function(){"one".should.equal("two")}).catch(function(t,e,r){n()})})}),describe("list.deleteItem(id)",function(){var t=null;before(function(n){e.getItems("$orderby=Id").then(function(n){return t=n[n.length-1],e.deleteItem(t.Id)}).then(function(){n()})}),it("Should delete that item",function(n){e.getItemById(t.Id).then(function(){throw"Should have failed because item has been deleted"}).catch(function(){n()})}),it("Should reject the promise if the item id can not be found",function(t){e.deleteItem(99999999).then(function(){throw"Should have failed because id doesnt exist"}).catch(function(){t()})})}),describe("list.updateItem()",function(){var t=null,n={Title:"Updated Title"};before(function(n){e.getItems("$orderby=Id desc").then(function(e){t=e[e.length-1],n()})}),it("Should return a promise",function(r){e.updateItem(t.Id,n).then(function(){r()})}),it("Should update only the properties that were passed",function(r){e.getItemById(t.Id).then(function(t){t.should.have.property("Title"),t.Title.should.equal(n.Title),r()})})})})}},function(t,e,n){"use strict";n(5).should();e.run=function(t){describe("var utils = SPScript.utils",function(){describe("utils.parseJSON(data)",function(){it("Should exist on the utils object",function(){t.should.have.property("parseJSON"),t.parseJSON.should.be.a("function")}),it("Should take a string or an object and return an object",function(){var e={one:"value of one",two:"value of two"},n=JSON.stringify(e),r=t.parseJSON(e);r.should.not.be.null,r.should.have.property("one"),r.one.should.equal(e.one);var o=t.parseJSON(n);o.should.not.be.null,o.should.have.property("one"),o.one.should.equal(e.one)})})})}},function(t,e){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function r(t){return 3*t.length/4-n(t)}function o(t){var e,r,o,i,s,a,u=t.length;s=n(t),a=new h(3*u/4-s),o=s>0?u-4:u;var f=0;for(e=0,r=0;e<o;e+=4,r+=3)i=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===s?(i=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,a[f++]=255&i):1===s&&(i=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}function i(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}function s(t,e,n){for(var r,o=[],s=e;s<n;s+=3)r=(t[s]<<16)+(t[s+1]<<8)+t[s+2],o.push(i(r));return o.join("")}function a(t){for(var e,n=t.length,r=n%3,o="",i=[],a=16383,c=0,h=n-r;c<h;c+=a)i.push(s(t,c,c+a>h?h:c+a));return 1===r?(e=t[n-1],o+=u[e>>2],o+=u[e<<4&63],o+="=="):2===r&&(e=(t[n-2]<<8)+t[n-1],o+=u[e>>10],o+=u[e>>4&63],o+=u[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=r,e.toByteArray=o,e.fromByteArray=a;for(var u=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=f.length;l<p;++l)u[l]=f[l],c[f.charCodeAt(l)]=l;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(t,e,n){(function(t){/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
"use strict";function r(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function o(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(o()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return a(this,t,e,n)}function a(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?p(t,e,n,r):"string"==typeof e?f(t,e,n):d(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e,n,r){return u(e),e<=0?i(t,e):void 0!==n?"string"==typeof r?i(t,e).fill(n,r):i(t,e).fill(n):i(t,e)}function h(t,e){if(u(e),t=i(t,e<0?0:0|g(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function f(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|v(e,n);t=i(t,r);var o=t.write(e,n);return o!==r&&(t=t.slice(0,o)),t}function l(t,e){var n=e.length<0?0:0|g(e.length);t=i(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function p(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=l(t,e),t}function d(t,e){if(s.isBuffer(e)){var n=0|g(e.length);return t=i(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||Z(e.length)?i(t,0):l(t,e);if("Buffer"===e.type&&W(e.data))return l(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),s.alloc(+t)}function v(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return V(t).length;default:if(r)return $(t).length;e=(""+e).toLowerCase(),r=!0}}function b(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return B(this,e,n);case"utf8":case"utf-8":return P(this,e,n);case"ascii":return M(this,e,n);case"latin1":case"binary":return R(this,e,n);case"base64":return O(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function m(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function w(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=s.from(e,r)),s.isBuffer(e))return 0===e.length?-1:x(t,e,n,r,o);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):x(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function x(t,e,n,r,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,u=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,n/=2}var c;if(o){var h=-1;for(c=n;c<a;c++)if(i(t,c)===i(e,h===-1?0:c-h)){if(h===-1&&(h=c),c-h+1===u)return h*s}else h!==-1&&(c-=c-h),h=-1}else for(n+u>a&&(n=a-u),c=n;c>=0;c--){for(var f=!0,l=0;l<u;l++)if(i(t,c+l)!==i(e,l)){f=!1;break}if(f)return c}return-1}function A(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function _(t,e,n,r){return X($(e,t.length-n),t,n,r)}function E(t,e,n,r){return X(G(e),t,n,r)}function j(t,e,n,r){return E(t,e,n,r)}function S(t,e,n,r){return X(V(e),t,n,r)}function T(t,e,n,r){return X(H(e,t.length-n),t,n,r)}function O(t,e,n){return 0===e&&n===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(e,n))}function P(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i=t[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=n){var u,c,h,f;switch(a){case 1:i<128&&(s=i);break;case 2:u=t[o+1],128===(192&u)&&(f=(31&i)<<6|63&u,f>127&&(s=f));break;case 3:u=t[o+1],c=t[o+2],128===(192&u)&&128===(192&c)&&(f=(15&i)<<12|(63&u)<<6|63&c,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:u=t[o+1],c=t[o+2],h=t[o+3],128===(192&u)&&128===(192&c)&&128===(192&h)&&(f=(15&i)<<18|(63&u)<<12|(63&c)<<6|63&h,f>65535&&f<1114112&&(s=f))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),o+=a}return I(r)}function I(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=tt));return n}function M(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function R(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function B(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=J(t[i]);return o}function C(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function k(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function N(t,e,n,r,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function U(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function q(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function L(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function D(t,e,n,r,o){return o||L(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,n,r,23,4),n+4}function Y(t,e,n,r,o){return o||L(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,n,r,52,8),n+8}function F(t){if(t=z(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function J(t){return t<16?"0"+t.toString(16):t.toString(16)}function $(t,e){e=e||1/0;for(var n,r=t.length,o=null,i=[],s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function G(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function H(t,e){for(var n,r,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function V(t){return K.toByteArray(F(t))}function X(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function Z(t){return t!==t}var K=n(25),Q=n(48),W=n(49);e.Buffer=s,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:r(),e.kMaxLength=o(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return a(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return c(null,t,e,n)},s.allocUnsafe=function(t){return h(null,t)},s.allocUnsafeSlow=function(t){return h(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!W(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=s.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var i=t[n];if(!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(r,o),o+=i.length}return r},s.byteLength=v,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):b.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,r,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var i=o-r,a=n-e,u=Math.min(i,a),c=this.slice(r,o),h=t.slice(e,n),f=0;f<u;++f)if(c[f]!==h[f]){i=c[f],a=h[f];break}return i<a?-1:a<i?1:0},s.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},s.prototype.indexOf=function(t,e,n){return w(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return w(this,t,e,n,!1)},s.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return A(this,t,e,n);case"utf8":case"utf-8":return _(this,t,e,n);case"ascii":return E(this,t,e,n);case"latin1":case"binary":return j(this,t,e,n);case"base64":return S(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);var r;if(s.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=s.prototype;else{var o=e-t;r=new s(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},s.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||k(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},s.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||k(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},s.prototype.readUInt8=function(t,e){return e||k(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||k(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||k(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||k(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||k(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||k(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},s.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||k(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||k(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){e||k(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||k(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||k(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||k(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||k(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||k(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||k(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||k(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var o=Math.pow(2,8*n)-1;N(this,t,e,n,o,0)}var i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var o=Math.pow(2,8*n)-1;N(this,t,e,n,o,0)}var i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):q(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):q(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);N(this,t,e,n,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);N(this,t,e,n,o-1,-o)}var i=n-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):q(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||N(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):q(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return D(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return D(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return Y(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return Y(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},s.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var a=s.isBuffer(t)?t:$(new s(t,r).toString()),u=a.length;for(i=0;i<n-e;++i)this[i+e]=a[i%u]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e,n){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=[],e=t.exports={};/*!
	 * Chai version
	 */
e.version="1.10.0",/*!
	 * Assertion Error
	 */
e.AssertionError=n(15);/*!
	 * Utils for plugins (not exported)
	 */
var o=n(40);e.use=function(t){return~r.indexOf(t)||(t(this,o),r.push(t)),this};/*!
	 * Configuration
	 */
var i=n(1);e.config=i;/*!
	 * Primary `Assertion` prototype
	 */
var s=n(28);e.use(s);/*!
	 * Core Assertions
	 */
var a=n(29);e.use(a);/*!
	 * Expect interface
	 */
var u=n(31);e.use(u);/*!
	 * Should interface
	 */
var c=n(32);e.use(c);/*!
	 * Assert interface
	 */
var h=n(30);e.use(h)},function(t,e,n){/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(1),o=function(){};t.exports=function(t,e){/*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */
function n(t,e,n){s(this,"ssfi",n||arguments.callee),s(this,"object",t),s(this,"message",e)}/*!
	   * Module dependencies.
	   */
var i=t.AssertionError,s=e.flag;/*!
	   * Module export.
	   */
t.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack},set:function(t){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack=t}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff},set:function(t){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff=t}}),n.addProperty=function(t,n){e.addProperty(this.prototype,t,n)},n.addMethod=function(t,n){e.addMethod(this.prototype,t,n)},n.addChainableMethod=function(t,n,r){e.addChainableMethod(this.prototype,t,n,r)},n.addChainableNoop=function(t,n){e.addChainableMethod(this.prototype,t,o,n)},n.overwriteProperty=function(t,n){e.overwriteProperty(this.prototype,t,n)},n.overwriteMethod=function(t,n){e.overwriteMethod(this.prototype,t,n)},n.overwriteChainableMethod=function(t,n,r){e.overwriteChainableMethod(this.prototype,t,n,r)},/*!
	   * ### .assert(expression, message, negateMessage, expected, actual)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String or Function} message or function that returns message to display if fails
	   * @param {String or Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @api private
	   */
n.prototype.assert=function(t,n,o,a,u,c){var h=e.test(this,arguments);if(!0!==c&&(c=!1),!0!==r.showDiff&&(c=!1),!h){var n=e.getMessage(this,arguments),f=e.getActual(this,arguments);throw new i(n,{actual:f,expected:a,showDiff:c},r.includeStack?this.assert:s(this,"ssfi"))}},/*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return s(this,"object")},set:function(t){s(this,"object",t)}})}},function(t,e){/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){function n(t,n){n&&w(this,"message",n),t=t.toLowerCase();var r=w(this,"object"),o=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===e.type(r),"expected #{this} to be "+o+t,"expected #{this} not to be "+o+t)}function r(){w(this,"contains",!0)}function o(t,n){n&&w(this,"message",n);var r=w(this,"object"),o=!1;if("array"===e.type(r)&&"object"===e.type(t)){for(var i in r)if(e.eql(r[i],t)){o=!0;break}}else if("object"===e.type(t)){if(!w(this,"negate")){for(var s in t)new m(r).property(s,t[s]);return}var a={};for(var s in t)a[s]=r[s];o=e.eql(a,t)}else o=r&&~r.indexOf(t);this.assert(o,"expected #{this} to include "+e.inspect(t),"expected #{this} to not include "+e.inspect(t))}function i(){var t=w(this,"object"),e=Object.prototype.toString.call(t);this.assert("[object Arguments]"===e,"expected #{this} to be arguments but got "+e,"expected #{this} to not be arguments")}function s(t,e){e&&w(this,"message",e);var n=w(this,"object");return w(this,"deep")?this.eql(t):void this.assert(t===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function a(t,n){n&&w(this,"message",n),this.assert(e.eql(t,w(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function u(t,e){e&&w(this,"message",e);var n=w(this,"object");if(w(this,"doLength")){new m(n,e).to.have.property("length");var r=n.length;this.assert(r>t,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",t,r)}else this.assert(n>t,"expected #{this} to be above "+t,"expected #{this} to be at most "+t)}function c(t,e){e&&w(this,"message",e);var n=w(this,"object");if(w(this,"doLength")){new m(n,e).to.have.property("length");var r=n.length;this.assert(r>=t,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",t,r)}else this.assert(n>=t,"expected #{this} to be at least "+t,"expected #{this} to be below "+t)}function h(t,e){e&&w(this,"message",e);var n=w(this,"object");if(w(this,"doLength")){new m(n,e).to.have.property("length");var r=n.length;this.assert(r<t,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",t,r)}else this.assert(n<t,"expected #{this} to be below "+t,"expected #{this} to be at least "+t)}function f(t,e){e&&w(this,"message",e);var n=w(this,"object");if(w(this,"doLength")){new m(n,e).to.have.property("length");var r=n.length;this.assert(r<=t,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",t,r)}else this.assert(n<=t,"expected #{this} to be at most "+t,"expected #{this} to be above "+t)}function l(t,n){n&&w(this,"message",n);var r=e.getName(t);this.assert(w(this,"object")instanceof t,"expected #{this} to be an instance of "+r,"expected #{this} to not be an instance of "+r)}function p(t,n){n&&w(this,"message",n);var r=w(this,"object");this.assert(r.hasOwnProperty(t),"expected #{this} to have own property "+e.inspect(t),"expected #{this} to not have own property "+e.inspect(t))}function d(){w(this,"doLength",!0)}function g(t,e){e&&w(this,"message",e);var n=w(this,"object");new m(n,e).to.have.property("length");var r=n.length;this.assert(r==t,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",t,r)}function y(t){var n,r=w(this,"object"),o=!0;if(t=t instanceof Array?t:Array.prototype.slice.call(arguments),!t.length)throw new Error("keys required");var i=Object.keys(r),s=t,a=t.length;if(o=t.every(function(t){return~i.indexOf(t)}),w(this,"negate")||w(this,"contains")||(o=o&&t.length==i.length),a>1){t=t.map(function(t){return e.inspect(t)});var u=t.pop();n=t.join(", ")+", and "+u}else n=e.inspect(t[0]);n=(a>1?"keys ":"key ")+n,n=(w(this,"contains")?"contain ":"have ")+n,this.assert(o,"expected #{this} to "+n,"expected #{this} to not "+n,s.sort(),i.sort(),!0)}function v(t,n,r){r&&w(this,"message",r);var o=w(this,"object");new m(o,r).is.a("function");var i=!1,s=null,a=null,u=null;0===arguments.length?(n=null,t=null):t&&(t instanceof RegExp||"string"==typeof t)?(n=t,t=null):t&&t instanceof Error?(s=t,t=null,n=null):"function"==typeof t?(a=t.prototype.name||t.name,"Error"===a&&t!==Error&&(a=(new t).name)):t=null;try{o()}catch(r){if(s)return this.assert(r===s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",s instanceof Error?s.toString():s,r instanceof Error?r.toString():r),w(this,"object",r),this;if(t&&(this.assert(r instanceof t,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",a,r instanceof Error?r.toString():r),!n))return w(this,"object",r),this;var c="object"===e.type(r)&&"message"in r?r.message:""+r;if(null!=c&&n&&n instanceof RegExp)return this.assert(n.exec(c),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",n,c),w(this,"object",r),this;if(null!=c&&n&&"string"==typeof n)return this.assert(~c.indexOf(n),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",n,c),w(this,"object",r),this;i=!0,u=r}var h="",f=null!==a?a:s?"#{exp}":"an error";i&&(h=" but #{act} was thrown"),this.assert(i===!0,"expected #{this} to throw "+f+h,"expected #{this} to not throw "+f+h,s instanceof Error?s.toString():s,u instanceof Error?u.toString():u),w(this,"object",u)}function b(t,e,n){return t.every(function(t){return n?e.some(function(e){return n(t,e)}):e.indexOf(t)!==-1})}var m=t.Assertion,w=(Object.prototype.toString,e.flag);["to","be","been","is","and","has","have","with","that","at","of","same"].forEach(function(t){m.addProperty(t,function(){return this})}),m.addProperty("not",function(){w(this,"negate",!0)}),m.addProperty("deep",function(){w(this,"deep",!0)}),m.addChainableMethod("an",n),m.addChainableMethod("a",n),m.addChainableMethod("include",o,r),m.addChainableMethod("contain",o,r),m.addChainableNoop("ok",function(){this.assert(w(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),m.addChainableNoop("true",function(){this.assert(!0===w(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),m.addChainableNoop("false",function(){this.assert(!1===w(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),m.addChainableNoop("null",function(){this.assert(null===w(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),m.addChainableNoop("undefined",function(){this.assert(void 0===w(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),m.addChainableNoop("exist",function(){this.assert(null!=w(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),m.addChainableNoop("empty",function(){var t=w(this,"object"),e=t;Array.isArray(t)||"string"==typeof object?e=t.length:"object"==typeof t&&(e=Object.keys(t).length),this.assert(!e,"expected #{this} to be empty","expected #{this} not to be empty")}),m.addChainableNoop("arguments",i),m.addChainableNoop("Arguments",i),m.addMethod("equal",s),m.addMethod("equals",s),m.addMethod("eq",s),m.addMethod("eql",a),m.addMethod("eqls",a),m.addMethod("above",u),m.addMethod("gt",u),m.addMethod("greaterThan",u),m.addMethod("least",c),m.addMethod("gte",c),m.addMethod("below",h),m.addMethod("lt",h),m.addMethod("lessThan",h),m.addMethod("most",f),m.addMethod("lte",f),m.addMethod("within",function(t,e,n){n&&w(this,"message",n);var r=w(this,"object"),o=t+".."+e;if(w(this,"doLength")){new m(r,n).to.have.property("length");var i=r.length;this.assert(i>=t&&i<=e,"expected #{this} to have a length within "+o,"expected #{this} to not have a length within "+o)}else this.assert(r>=t&&r<=e,"expected #{this} to be within "+o,"expected #{this} to not be within "+o)}),m.addMethod("instanceof",l),m.addMethod("instanceOf",l),m.addMethod("property",function(t,n,r){r&&w(this,"message",r);var o=w(this,"deep")?"deep property ":"property ",i=w(this,"negate"),s=w(this,"object"),a=w(this,"deep")?e.getPathValue(t,s):s[t];if(i&&void 0!==n){if(void 0===a)throw r=null!=r?r+": ":"",new Error(r+e.inspect(s)+" has no "+o+e.inspect(t))}else this.assert(void 0!==a,"expected #{this} to have a "+o+e.inspect(t),"expected #{this} to not have "+o+e.inspect(t));void 0!==n&&this.assert(n===a,"expected #{this} to have a "+o+e.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have a "+o+e.inspect(t)+" of #{act}",n,a),w(this,"object",a)}),m.addMethod("ownProperty",p),m.addMethod("haveOwnProperty",p),m.addChainableMethod("length",g,d),m.addMethod("lengthOf",g),m.addMethod("match",function(t,e){e&&w(this,"message",e);var n=w(this,"object");this.assert(t.exec(n),"expected #{this} to match "+t,"expected #{this} not to match "+t)}),m.addMethod("string",function(t,n){n&&w(this,"message",n);var r=w(this,"object");new m(r,n).is.a("string"),this.assert(~r.indexOf(t),"expected #{this} to contain "+e.inspect(t),"expected #{this} to not contain "+e.inspect(t))}),m.addMethod("keys",y),m.addMethod("key",y),m.addMethod("throw",v),m.addMethod("throws",v),m.addMethod("Throw",v),m.addMethod("respondTo",function(t,n){n&&w(this,"message",n);var r=w(this,"object"),o=w(this,"itself"),i="function"!==e.type(r)||o?r[t]:r.prototype[t];this.assert("function"==typeof i,"expected #{this} to respond to "+e.inspect(t),"expected #{this} to not respond to "+e.inspect(t))}),m.addProperty("itself",function(){w(this,"itself",!0)}),m.addMethod("satisfy",function(t,n){n&&w(this,"message",n);var r=w(this,"object"),o=t(r);this.assert(o,"expected #{this} to satisfy "+e.objDisplay(t),"expected #{this} to not satisfy"+e.objDisplay(t),!this.negate,o)}),m.addMethod("closeTo",function(t,n,r){r&&w(this,"message",r);var o=w(this,"object");if(new m(o,r).is.a("number"),"number"!==e.type(t)||"number"!==e.type(n))throw new Error("the arguments to closeTo must be numbers");this.assert(Math.abs(o-t)<=n,"expected #{this} to be close to "+t+" +/- "+n,"expected #{this} not to be close to "+t+" +/- "+n)}),m.addMethod("members",function(t,n){n&&w(this,"message",n);var r=w(this,"object");new m(r).to.be.an("array"),new m(t).to.be.an("array");var o=w(this,"deep")?e.eql:void 0;return w(this,"contains")?this.assert(b(t,r,o),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",r,t):void this.assert(b(r,t,o)&&b(t,r,o),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",r,t)})}},function(module,exports){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
module.exports=function(chai,util){/*!
	   * Chai dependencies.
	   */
var Assertion=chai.Assertion,flag=util.flag,assert=chai.assert=function(t,e){var n=new Assertion(null,null,chai.assert);n.assert(t,e,"[ negation message unavailable ]")};assert.fail=function(t,e,n,r){throw n=n||"assert.fail()",new chai.AssertionError(n,{actual:t,expected:e,operator:r},assert.fail)},assert.ok=function(t,e){new Assertion(t,e).is.ok},assert.notOk=function(t,e){new Assertion(t,e).is.not.ok},assert.equal=function(t,e,n){var r=new Assertion(t,n,assert.equal);r.assert(e==flag(r,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t)},assert.notEqual=function(t,e,n){var r=new Assertion(t,n,assert.notEqual);r.assert(e!=flag(r,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t)},assert.strictEqual=function(t,e,n){new Assertion(t,n).to.equal(e)},assert.notStrictEqual=function(t,e,n){new Assertion(t,n).to.not.equal(e)},assert.deepEqual=function(t,e,n){new Assertion(t,n).to.eql(e)},assert.notDeepEqual=function(t,e,n){new Assertion(t,n).to.not.eql(e)},assert.isTrue=function(t,e){new Assertion(t,e).is.true},assert.isFalse=function(t,e){new Assertion(t,e).is.false},assert.isNull=function(t,e){new Assertion(t,e).to.equal(null)},assert.isNotNull=function(t,e){new Assertion(t,e).to.not.equal(null)},assert.isUndefined=function(t,e){new Assertion(t,e).to.equal(void 0)},assert.isDefined=function(t,e){new Assertion(t,e).to.not.equal(void 0)},assert.isFunction=function(t,e){new Assertion(t,e).to.be.a("function")},assert.isNotFunction=function(t,e){new Assertion(t,e).to.not.be.a("function")},assert.isObject=function(t,e){new Assertion(t,e).to.be.a("object")},assert.isNotObject=function(t,e){new Assertion(t,e).to.not.be.a("object")},assert.isArray=function(t,e){new Assertion(t,e).to.be.an("array")},assert.isNotArray=function(t,e){new Assertion(t,e).to.not.be.an("array")},assert.isString=function(t,e){new Assertion(t,e).to.be.a("string")},assert.isNotString=function(t,e){new Assertion(t,e).to.not.be.a("string")},assert.isNumber=function(t,e){new Assertion(t,e).to.be.a("number")},assert.isNotNumber=function(t,e){new Assertion(t,e).to.not.be.a("number")},assert.isBoolean=function(t,e){new Assertion(t,e).to.be.a("boolean")},assert.isNotBoolean=function(t,e){new Assertion(t,e).to.not.be.a("boolean")},assert.typeOf=function(t,e,n){new Assertion(t,n).to.be.a(e)},assert.notTypeOf=function(t,e,n){new Assertion(t,n).to.not.be.a(e)},assert.instanceOf=function(t,e,n){new Assertion(t,n).to.be.instanceOf(e)},assert.notInstanceOf=function(t,e,n){new Assertion(t,n).to.not.be.instanceOf(e)},assert.include=function(t,e,n){new Assertion(t,n,assert.include).include(e)},assert.notInclude=function(t,e,n){new Assertion(t,n,assert.notInclude).not.include(e)},assert.match=function(t,e,n){new Assertion(t,n).to.match(e)},assert.notMatch=function(t,e,n){new Assertion(t,n).to.not.match(e)},assert.property=function(t,e,n){new Assertion(t,n).to.have.property(e)},assert.notProperty=function(t,e,n){new Assertion(t,n).to.not.have.property(e)},assert.deepProperty=function(t,e,n){new Assertion(t,n).to.have.deep.property(e)},assert.notDeepProperty=function(t,e,n){new Assertion(t,n).to.not.have.deep.property(e)},assert.propertyVal=function(t,e,n,r){new Assertion(t,r).to.have.property(e,n)},assert.propertyNotVal=function(t,e,n,r){new Assertion(t,r).to.not.have.property(e,n)},assert.deepPropertyVal=function(t,e,n,r){new Assertion(t,r).to.have.deep.property(e,n)},assert.deepPropertyNotVal=function(t,e,n,r){new Assertion(t,r).to.not.have.deep.property(e,n)},assert.lengthOf=function(t,e,n){new Assertion(t,n).to.have.length(e)},assert.Throw=function(t,e,n,r){("string"==typeof e||e instanceof RegExp)&&(n=e,e=null);var o=new Assertion(t,r).to.Throw(e,n);return flag(o,"object")},assert.doesNotThrow=function(t,e,n){"string"==typeof e&&(n=e,e=null),new Assertion(t,n).to.not.Throw(e)},assert.operator=function(val,operator,val2,msg){if(!~["==","===",">",">=","<","<=","!=","!=="].indexOf(operator))throw new Error('Invalid operator "'+operator+'"');var test=new Assertion(eval(val+operator+val2),msg);test.assert(!0===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))},assert.closeTo=function(t,e,n,r){new Assertion(t,r).to.be.closeTo(e,n)},assert.sameMembers=function(t,e,n){new Assertion(t,n).to.have.same.members(e)},assert.includeMembers=function(t,e,n){new Assertion(t,n).to.include.members(e)},/*!
	   * Undocumented / untested
	   */
assert.ifError=function(t,e){new Assertion(t,e).to.not.be.ok},/*!
	   * Aliases.
	   */
function t(e,n){return assert[n]=assert[e],t}("Throw","throw")("Throw","throws")}},function(t,e){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){t.expect=function(e,n){return new t.Assertion(e,n)}}},function(t,e){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){function n(){function t(){return this instanceof String||this instanceof Number?new r(this.constructor(this),null,t):this instanceof Boolean?new r(1==this,null,t):new r(this,null,t)}function e(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:e,get:t,configurable:!0});var n={};return n.equal=function(t,e,n){new r(t,n).to.equal(e)},n.Throw=function(t,e,n,o){new r(t,o).to.Throw(e,n)},n.exist=function(t,e){new r(t,e).to.exist},n.not={},n.not.equal=function(t,e,n){new r(t,n).to.not.equal(e)},n.not.Throw=function(t,e,n,o){new r(t,o).to.not.Throw(e,n)},n.not.exist=function(t,e){new r(t,e).to.not.exist},n.throw=n.Throw,n.not.throw=n.not.Throw,n}var r=t.Assertion;t.should=n,t.Should=n}},function(t,e,n){/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependencies
	 */
var r=n(14),o=n(2),i=n(1),s="__proto__"in Object,a=/^(?:length|name|arguments|caller)$/,u=Function.prototype.call,c=Function.prototype.apply;t.exports=function(t,e,n,h){"function"!=typeof h&&(h=function(){});var f={method:n,chainingBehavior:h};t.__methods||(t.__methods={}),t.__methods[e]=f,Object.defineProperty(t,e,{get:function(){f.chainingBehavior.call(this);var e=function t(){var e=o(this,"ssfi");e&&i.includeStack===!1&&o(this,"ssfi",t);var n=f.method.apply(this,arguments);return void 0===n?this:n};if(s){var n=e.__proto__=Object.create(this);n.call=u,n.apply=c}else{var h=Object.getOwnPropertyNames(t);h.forEach(function(n){if(!a.test(n)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r)}})}return r(this,e),e},configurable:!0})}},function(t,e,n){/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(1),o=n(2);t.exports=function(t,e,n){t[e]=function(){var i=o(this,"ssfi");i&&r.includeStack===!1&&o(this,"ssfi",t[e]);var s=n.apply(this,arguments);return void 0===s?this:s}}},function(t,e){/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){Object.defineProperty(t,e,{get:function(){var t=n.call(this);return void 0===t?this:t},configurable:!0})}},function(t,e){/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t){var e=[];for(var n in t)e.push(n);return e}},function(t,e,n){/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependancies
	 */
var r=n(2),o=n(11),i=(n(6),n(13));t.exports=function(t,e){var n=r(t,"negate"),s=r(t,"object"),a=e[3],u=o(t,e),c=n?e[2]:e[1],h=r(t,"message");return"function"==typeof c&&(c=c()),c=c||"",c=c.replace(/#{this}/g,i(s)).replace(/#{act}/g,i(u)).replace(/#{exp}/g,i(a)),h?h+": "+c:c}},function(t,e){/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */
function n(t){var e=t.replace(/\[/g,".["),n=e.match(/(\\\.|[^.]+?)+/g);return n.map(function(t){var e=/\[(\d+)\]$/,n=e.exec(t);return n?{i:parseFloat(n[1])}:{p:t}})}/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */
function r(t,e){for(var n,r=e,o=0,i=t.length;o<i;o++){var s=t[o];r?("undefined"!=typeof s.p?r=r[s.p]:"undefined"!=typeof s.i&&(r=r[s.i]),o==i-1&&(n=r)):n=void 0}return n}/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */
t.exports=function(t,e){var o=n(t);return r(o,e)}},function(t,e){/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t){function e(t){n.indexOf(t)===-1&&n.push(t)}for(var n=Object.getOwnPropertyNames(subject),r=Object.getPrototypeOf(subject);null!==r;)Object.getOwnPropertyNames(r).forEach(e),r=Object.getPrototypeOf(r);return n}},function(t,e,n){/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Main exports
	 */
var e=t.exports={};/*!
	 * test utility
	 */
e.test=n(44),/*!
	 * type utility
	 */
e.type=n(45),/*!
	 * message utility
	 */
e.getMessage=n(37),/*!
	 * actual utility
	 */
e.getActual=n(11),/*!
	 * Inspect util
	 */
e.inspect=n(6),/*!
	 * Object Display util
	 */
e.objDisplay=n(13),/*!
	 * Flag utility
	 */
e.flag=n(2),/*!
	 * Flag transferring utility
	 */
e.transferFlags=n(14),/*!
	 * Deep equal utility
	 */
e.eql=n(46),/*!
	 * Deep path value
	 */
e.getPathValue=n(38),/*!
	 * Function name
	 */
e.getName=n(12),/*!
	 * add Property
	 */
e.addProperty=n(35),/*!
	 * add Method
	 */
e.addMethod=n(34),/*!
	 * overwrite Property
	 */
e.overwriteProperty=n(43),/*!
	 * overwrite Method
	 */
e.overwriteMethod=n(42),/*!
	 * Add a chainable method
	 */
e.addChainableMethod=n(33),/*!
	 * Overwrite chainable method
	 */
e.overwriteChainableMethod=n(41)},function(t,e){/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n,r){var o=t.__methods[e],i=o.chainingBehavior;o.chainingBehavior=function(){var t=r(i).call(this);return void 0===t?this:t};var s=o.method;o.method=function(){var t=n(s).apply(this,arguments);return void 0===t?this:t}}},function(t,e){/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=t[e],o=function(){return this};r&&"function"==typeof r&&(o=r),t[e]=function(){var t=n(o).apply(this,arguments);return void 0===t?this:t}}},function(t,e){/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=Object.getOwnPropertyDescriptor(t,e),o=function(){};r&&"function"==typeof r.get&&(o=r.get),Object.defineProperty(t,e,{get:function(){var t=n(o).call(this);return void 0===t?this:t},configurable:!0})}},function(t,e,n){/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependancies
	 */
var r=n(2);t.exports=function(t,e){var n=r(t,"negate"),o=e[0];return n?!o:o}},function(t,e){/*!
	 * Chai - type utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Detectable javascript natives
	 */
var n={"[object Arguments]":"arguments","[object Array]":"array","[object Date]":"date","[object Function]":"function","[object Number]":"number","[object RegExp]":"regexp","[object String]":"string"};t.exports=function(t){var e=Object.prototype.toString.call(t);return n[e]?n[e]:null===t?"null":void 0===t?"undefined":t===Object(t)?"object":typeof t}},function(t,e,n){t.exports=n(47)},function(t,e,n){function r(t,e,n){return!!o(t,e)||("date"===g(t)?s(t,e):"regexp"===g(t)?a(t,e):d.isBuffer(t)?f(t,e):"arguments"===g(t)?u(t,e,n):!!i(t,e)&&("object"!==g(t)&&"object"!==g(e)&&"array"!==g(t)&&"array"!==g(e)?o(t,e):p(t,e,n)))}/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */
function o(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
function i(t,e){return g(t)===g(e)}/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */
function s(t,e){return"date"===g(e)&&o(t.getTime(),e.getTime())}/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */
function a(t,e){return"regexp"===g(e)&&o(t.toString(),e.toString())}/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */
function u(t,e,n){return"arguments"===g(e)&&(t=[].slice.call(t),e=[].slice.call(e),r(t,e,n))}/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */
function c(t){var e=[];for(var n in t)e.push(n);return e}/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */
function h(t,e){if(t.length!==e.length)return!1;for(var n=0,r=!0;n<t.length;n++)if(t[n]!==e[n]){r=!1;break}return r}/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
function f(t,e){return!!d.isBuffer(e)&&h(t,e)}/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */
function l(t){return null!==t&&void 0!==t}/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
function p(t,e,n){if(!l(t)||!l(e))return!1;if(t.prototype!==e.prototype)return!1;var o;if(n){for(o=0;o<n.length;o++)if(n[o][0]===t&&n[o][1]===e||n[o][0]===e&&n[o][1]===t)return!0}else n=[];try{var i=c(t),s=c(e)}catch(t){return!1}if(i.sort(),s.sort(),!h(i,s))return!1;n.push([t,e]);var a;for(o=i.length-1;o>=0;o--)if(a=i[o],!r(t[a],e[a],n))return!1;return!0}/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependencies
	 */
var d,g=n(50);try{d=n(26).Buffer}catch(t){d={},d.isBuffer=function(){return!1}}/*!
	 * Primary Export
	 */
t.exports=r},function(t,e){e.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,u=(1<<a)-1,c=u>>1,h=-7,f=n?o-1:0,l=n?-1:1,p=t[e+f];for(f+=l,i=p&(1<<-h)-1,p>>=-h,h+=a;h>0;i=256*i+t[e+f],f+=l,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=r;h>0;s=256*s+t[e+f],f+=l,h-=8);if(0===i)i=1-c;else{if(i===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,r),i-=c}return(p?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,a,u,c=8*i-o-1,h=(1<<c)-1,f=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,d=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+f>=1?l/u:l*Math.pow(2,1-f),e*u>=2&&(s++,u/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*u-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[n+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[n+p]=255&s,p+=d,s/=256,c-=8);t[n+p-d]|=128*g}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){t.exports=n(51)},function(t,e){function n(t){var e=Object.prototype.toString.call(t);return o[e]?o[e]:null===t?"null":void 0===t?"undefined":t===Object(t)?"object":typeof t}function r(){this.tests={}}/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Primary Exports
	 */
var e=t.exports=n,o={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};e.Library=r,r.prototype.of=n,r.prototype.define=function(t,e){return 1===arguments.length?this.tests[t]:(this.tests[t]=e,this)},r.prototype.test=function(t,e){if(e===n(t))return!0;var r=this.tests[e];if(r&&"regexp"===n(r))return r.test(t);if(r&&"function"===n(r))return r(t);throw new ReferenceError('Type test "'+e+'" not defined or invalid.')}}]);
//# sourceMappingURL=tests.js.map