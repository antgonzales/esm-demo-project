// Date utilities with named exports  
const formatDate = (date, format = 'short') => {
  switch (format) {
    case 'short':
      return date.toLocaleDateString();
    case 'long':
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    case 'iso':
      return date.toISOString();
    default:
      return date.toString();
  }
};
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
const getDaysDifference = (date1, date2) => {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};
const isWeekend = date => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
const getStartOfWeek = date => {
  const result = new Date(date);
  const day = result.getDay();
  const diff = result.getDate() - day;
  result.setDate(diff);
  return result;
};
// Another default export mixed with named exports
const dateUtils = {
  formatDate,
  addDays,
  getDaysDifference,
  isWeekend,
  getStartOfWeek
};

export { addDays, dateUtils as default, formatDate, getDaysDifference, getStartOfWeek, isWeekend };
//# sourceMappingURL=date-utils.js.map
