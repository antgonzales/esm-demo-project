export * from './components';
export * from './utils';
export * from './services';
export { Button, Modal } from './components';
export { formatString, formatDate, utils } from './utils';
export { ApiService, cache, services } from './services';
import { Button } from './components';
import { ApiService as apiService } from './services';
export declare const app: {
    components: {
        Button: typeof Button;
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
        Button: typeof Button;
        Modal: typeof import("./components").Modal;
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
        cache: import("./services").Cache<unknown>;
        ApiService: typeof apiService;
    };
    app: {
        components: {
            Button: typeof Button;
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
export { default as allComponents } from './components';
export { default as allUtils } from './utils';
export { default as allServices } from './services';
export * as ComponentsNS from './components';
export * as Utils from './utils';
export * as Services from './services';
//# sourceMappingURL=index.d.ts.map