/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let ln = digits.length - 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    if (digits[i] === 9) {
      digits[i] = 0;
      if (!digits[i - 1]) {
        digits = [1, ...digits];
      }
    }
  }

  return digits;
};


const tests = [
  [[1,2,3]],
  [[4,3,2,1]],
  [[0]],
  [[9]],
  [[9, 9]],
  [[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]], // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]
  [[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]], // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
];

tests.forEach(item => console.log('---->',item, plusOne(...item)));

module.exports = { tests, plusOne };