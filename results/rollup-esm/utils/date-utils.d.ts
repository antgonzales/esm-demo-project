export declare const formatDate: (date: Date, format?: "short" | "long" | "iso") => string;
export declare const addDays: (date: Date, days: number) => Date;
export declare const getDaysDifference: (date1: Date, date2: Date) => number;
export declare const isWeekend: (date: Date) => boolean;
export declare const getStartOfWeek: (date: Date) => Date;
declare const dateUtils: {
    formatDate: (date: Date, format?: "short" | "long" | "iso") => string;
    addDays: (date: Date, days: number) => Date;
    getDaysDifference: (date1: Date, date2: Date) => number;
    isWeekend: (date: Date) => boolean;
    getStartOfWeek: (date: Date) => Date;
};
export default dateUtils;
//# sourceMappingURL=date-utils.d.ts.map