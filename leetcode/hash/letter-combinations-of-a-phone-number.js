/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note
that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (given) {
  if (given.length === 0) return [];

  const digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let output = new Set();

  function loopDigits(digits, prefix) {
    if (prefix.length === given.length) {
      output.add(prefix);
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      const letters = digitMap[digits[i]];
      for (let letter of letters) {
        loopDigits(digits.slice(i + 1), prefix + letter);
      }
    }
  }

  loopDigits(given, "");
  return [...output];
};

console.log(letterCombinations("23"));
// console.log(letterCombinations("2345678"));
// console.log(letterCombinations("22333"));
