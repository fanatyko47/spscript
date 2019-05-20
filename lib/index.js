import utils from "./utils";
import Context from "./context/Context";
export function createContext(url, options) {
    try {
        // TODO: use get Site url util
        if (!url && global._spPageContextInfo) {
            url = global._spPageContextInfo.webAbsoluteUrl;
        }
        if (!url)
            url = utils.getSiteUrl();
        if (!url)
            throw new Error("Unable to find url to create SPScript Context");
        return new Context(url, options);
    }
    catch (ex) {
        throw new Error("Unable to create SPScript Context: " + ex.message);
    }
}
var spscript = {
    utils: utils,
    createContext: createContext,
};
global.SPScript = spscript;
export default spscript;
