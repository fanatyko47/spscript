import Context, { ContextOptions } from "./context/Context";
export declare function createContext(url?: string, options?: ContextOptions): Context;
declare let spscript: {
    utils: {
        isBrowser: () => boolean;
        headers: import("./utils/headers").HeaderUtils;
        parseJSON: (data: any) => any;
        validateODataV2: (data: any) => any;
        parseOData: (data: any) => any;
        qs: {
            toObj: typeof import("./utils/queryString").toObj;
            fromObj: typeof import("./utils/queryString").fromObj;
        };
        loadScript: (url: any) => Promise<{}>;
        loadScripts: (urls: any) => Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
        loadCSS: (url: string) => void;
        getArrayBuffer: (file: any) => Promise<{}>;
        waitForLibraries: (namespaces: any) => Promise<{}>;
        waitForLibrary: (namespace: any) => Promise<{}>;
        validateNamespace: (namespace: any) => boolean;
        waitForElement: (selector: any, timeout?: number) => Promise<{}>;
        openModal: (url: string, modalOptions?: any) => void;
        getTenant: typeof import("./utils").getTenant;
        getSiteUrl: typeof import("./utils").getSiteUrl;
    };
    createContext: typeof createContext;
};
export default spscript;
