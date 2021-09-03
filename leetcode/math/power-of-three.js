/** */
function isPowerOfThree(n) {
  let r = 0;
  let c = 0;
  while(r < n) {
    r = Math.pow(3, c);
    if (r === n) return true;
    c++;
  }
  return false;
}


const tests = [
  [27], // true
  [0], // false
  [9], // true
  [45], // false
  [-27], // false
  [1], // false
];

tests.forEach(item => console.log('---->\n', item, '\n', isPowerOfThree(...item)));

module.exports = { tests, isPowerOfThree };
