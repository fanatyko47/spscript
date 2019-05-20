;
var jsonMimeType = "application/json;odata=verbose";
function getStandardHeaders(digest) {
    var headers = {
        "Accept": jsonMimeType,
        "Content-Type": jsonMimeType
    };
    if (digest)
        headers["X-RequestDigest"] = digest;
    return headers;
}
var getAddHeaders = getStandardHeaders;
var getFilestreamHeaders = function (digest) {
    return {
        'Accept': jsonMimeType,
        'X-RequestDigest': digest,
        'Content-Type': "application/octet-stream",
        'binaryStringRequestBody': "true"
    };
};
var getAttachmentsHeaders = function (digest){
    return{
        'Accept': "application/json; odata=verbose",
        'X-RequestDigest': digest,
        "content-type":"application/json; odata=verbose",
        "binaryStringRequestBody" : true,    
    }
};
var getActionHeaders = function (verb, digest) {
    return Object.assign({}, getStandardHeaders(digest), {
        "X-HTTP-Method": verb
    });
};
var decorateETag = function (headers, etag) {
    if (etag)
        headers["If-Match"] = etag;
    return headers;
};
var getUpdateHeaders = function (digest, etag) { return decorateETag(getActionHeaders("MERGE", digest), etag); };
var getDeleteHeaders = function (digest, etag) { return decorateETag(getActionHeaders("DELETE", digest), etag); };
var headerUtils = {
    getStandardHeaders: getStandardHeaders,
    getAddHeaders: getAddHeaders,
    getFilestreamHeaders: getFilestreamHeaders,
    getAttachmentsHeaders: getAttachmentsHeaders,
    getUpdateHeaders: getUpdateHeaders,
    getDeleteHeaders: getDeleteHeaders,
    getActionHeaders: getActionHeaders
};
export default headerUtils;
