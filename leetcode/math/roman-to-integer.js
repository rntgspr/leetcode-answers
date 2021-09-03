/** */
function romanToInt(s) {
  const t = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  
  let r = 0;
  let c = s.length - 1;
  let p = '';
  let n = '';
  while (c >= 0) {
    p = s[c];
    n = s[c - 1];
    if (t[n] && t[p] > t[n]) {
      r += t[p] - t[n];
      c--;
    } else {
      r += t[p];
    }
    c--;
  }

  return r;
}

const tests = [
  ['III'], // 3
  ['VIII'], // 8
  ['VII'], // 7
  ['IV'], // 4
  ['IX'], // 9
  ['XII'], // 12
  ['LVIII'], // 58, Explanation: L = 50, V= 5, III = 3.
  ['MCMXCIV'], // 1994, Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
];

tests.forEach(item => console.log('---->\n', item, '\n', romanToInt(...item)));

module.exports = { tests, romanToInt };
