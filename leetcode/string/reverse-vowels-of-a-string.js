/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases,
more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 
Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowelsFor = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const splitted = s.split("");

  function isItAVowel(c) {
    return vowels.has(c);
  }

  let l = 0;
  let r = splitted.length - 1;

  for (l; l < splitted.length; l++) {
    if (isItAVowel(splitted[l])) {
      for (r; r > l; r--) {
        if (isItAVowel(splitted[r])) {
          [splitted[r], splitted[l]] = [splitted[l], splitted[r]];
          r--;
          break;
        }
      }
    }
  }

  return splitted.join("");
};

var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const splitted = s.split("");

  let l = 0;
  let r = splitted.length - 1;

  while (l < r) {
    if (!vowels.has(splitted[l])) {
      l++;
    } else if (!vowels.has(splitted[r])) {
      r--;
    } else {
      [splitted[l], splitted[r]] = [splitted[r], splitted[l]];
      l++;
      r--;
    }
  }

  return splitted.join("");
};

// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leotcede"));
console.log(reverseVowels("laeitioul"));
