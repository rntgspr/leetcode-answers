/**
 * @param {number} x
 * @return {number}
 */
function reverse(reversed) {
  const joined = Math.abs(reversed).toString().split('').reverse().join('');
  const operator = reversed < 0 ? '-' : ''; 
  const num = parseInt(`${operator}${joined}`);
  return num > Math.pow(2, 31) - 1 || num < Math.pow(-2,31) ? 0 : num;
};

module.export = { reverse };