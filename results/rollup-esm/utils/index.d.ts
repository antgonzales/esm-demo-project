export * from './string-utils.js';
export * from './date-utils.js';
export { default as stringUtils } from './string-utils.js';
export { default as dateUtils } from './date-utils.js';
export declare const utils: {
    string: {
        formatString: (str: string, options?: {
            uppercase?: boolean;
            trim?: boolean;
            maxLength?: number;
        }) => string;
        slugify: (str: string) => string;
        capitalize: (str: string) => string;
        truncate: (str: string, length: number) => string;
    };
    date: {
        formatDate: (date: Date, format?: "short" | "long" | "iso") => string;
        addDays: (date: Date, days: number) => Date;
        getDaysDifference: (date1: Date, date2: Date) => number;
        isWeekend: (date: Date) => boolean;
        getStartOfWeek: (date: Date) => Date;
    };
};
declare const allUtils: {
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
export default allUtils;
//# sourceMappingURL=index.d.ts.map