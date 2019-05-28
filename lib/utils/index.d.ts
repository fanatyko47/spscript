import { toObj, fromObj } from "./queryString";
import { HeaderUtils } from "./headers";
declare function isBrowser(): boolean;
declare function parseJSON(data: any): any;
declare function validateODataV2(data: any): any;
declare function openModal(url: string, modalOptions?: any): void;
export declare function checkIsSharePointLink(url: string): boolean;
export declare function getSiteUrl(url?: string): string;
export declare function getTenant(url?: string): string;
declare var utils: {
    isBrowser: typeof isBrowser;
    headers: HeaderUtils;
    parseJSON: typeof parseJSON;
    validateODataV2: typeof validateODataV2;
    parseOData: typeof validateODataV2;
    qs: {
        toObj: typeof toObj;
        fromObj: typeof fromObj;
    };
    loadScript: (url: any) => Promise<{}>;
    loadScripts: (urls: any) => Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
    loadCSS: (url: string) => void;
    getArrayBuffer: (file: any) => Promise<{}>;
    waitForLibraries: (namespaces: any) => Promise<{}>;
    waitForLibrary: (namespace: any) => Promise<{}>;
    validateNamespace: (namespace: any) => boolean;
    waitForElement: (selector: any, timeout?: number) => Promise<{}>;
    openModal: typeof openModal;
    getTenant: typeof getTenant;
    getSiteUrl: typeof getSiteUrl;
};
export default utils;