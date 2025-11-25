export * from './components/index.js';
export * from './utils/index.js';
export * from './services/index.js';
export { Button, Modal } from './components/index.js';
export { formatString, formatDate, utils } from './utils/index.js';
export { ApiService, cache, services } from './services/index.js';
import { ApiService as apiService } from './services/index.js';
export declare const app: {
    components: {
        Button: import("react").FC<import("./components/index.js").ButtonProps>;
    };
    utils: {
        formatString: (str: string, options?: {
            uppercase?: boolean;
            trim?: boolean;
            maxLength?: number;
        }) => string;
    };
    services: {
        api: typeof apiService;
    };
};
declare const library: {
    components: {
        Button: import("react").FC<import("./components/index.js").ButtonProps>;
        Modal: import("react").FC<import("./components/index.js").ModalProps>;
    };
    utils: {
        formatDate: (date: Date, format?: "short" | "long" | "iso") => string;
        addDays: (date: Date, days: number) => Date;
        getDaysDifference: (date1: Date, date2: Date) => number;
        isWeekend: (date: Date) => boolean;
        getStartOfWeek: (date: Date) => Date;
        formatString: (str: string, options?: {
            uppercase?: boolean;
            trim?: boolean;
            maxLength?: number;
        }) => string;
        slugify: (str: string) => string;
        capitalize: (str: string) => string;
        truncate: (str: string, length: number) => string;
    };
    services: {
        api: apiService;
        cache: import("./services/index.js").Cache<unknown>;
        ApiService: typeof apiService;
    };
    app: {
        components: {
            Button: import("react").FC<import("./components/index.js").ButtonProps>;
        };
        utils: {
            formatString: (str: string, options?: {
                uppercase?: boolean;
                trim?: boolean;
                maxLength?: number;
            }) => string;
        };
        services: {
            api: typeof apiService;
        };
    };
};
export default library;
export { default as allComponents } from './components/index.js';
export { default as allUtils } from './utils/index.js';
export { default as allServices } from './services/index.js';
export * as ComponentsNS from './components/index.js';
export * as Utils from './utils/index.js';
export * as Services from './services/index.js';
//# sourceMappingURL=index.d.ts.map