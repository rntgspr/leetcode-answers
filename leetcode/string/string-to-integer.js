/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (log) => Math.max( Math.pow(-2,31), Math.min(Math.pow(2, 31) - 1, parseInt(log, 10) || 0));

// console.log(myAtoi("9877897979879870010 asdaasdasd"));

module.export = { myAtoi };