// String utilities with named exports
export const formatString = (str, options) => {
    let result = str;
    if (options?.trim) {
        result = result.trim();
    }
    if (options?.uppercase) {
        result = result.toUpperCase();
    }
    if (options?.maxLength && result.length > options.maxLength) {
        result = result.substring(0, options.maxLength) + '...';
    }
    return result;
};
export const slugify = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
};
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
export const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
};
// Export a default utility object (mixing default + named exports)
const stringUtils = {
    formatString,
    slugify,
    capitalize,
    truncate
};
export default stringUtils;
//# sourceMappingURL=string-utils.js.map