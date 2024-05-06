// 151. Reverse Words in a String
/*

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function reverseString(given) {
    let l = given.length;
    for (let i = 0; i < given.length; i++) {
      given = given[i] + given;
      i++;
    }
    return given.slice(0, l);
  }

  s = reverseString(s);
  let st = 0;
  let e = s.length;
  for (let i = 0; i < e; i++) {
    if (s[i] === " " || i === e - 1) {
      const rs = reverseString(s.slice(st, i + 1).trim());
      if (!rs) continue;
      s = s + rs + " ";
      st = i;
    }
  }

  s = s.slice(e, e * 2).trim();
  return s;
};

// console.log(reverseWords("a good   example"));
// console.log(reverseWords("the sky"));
// console.log(reverseWords("the sky is"));
// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("blue the sky is"));
// console.log(reverseWords("  hello world  "));
