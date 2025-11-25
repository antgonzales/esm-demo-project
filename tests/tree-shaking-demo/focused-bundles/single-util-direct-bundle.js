// String utilities with named exports
const formatString = (str, options) => {
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
};const result = formatString('hello', { uppercase: true });
    var singleUtilDirect = { result };export{singleUtilDirect as default,result};