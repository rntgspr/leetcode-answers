// 394. Decode String
/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is
being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square
brackets are well-formed, etc. Furthermore, you may assume that the original data does not
contain any digits and that digits are only for those repeat numbers, k. For example, there
will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  function build(f) {
    let mm = "";
    let ss = "";
    for (let i = 0; i < f.length - 1; i++) {
      if (!Number.isNaN(Number(f[i]))) {
        mm += f[i];
      } else if (f[i] !== "[") {
        ss += f[i];
      }
    }
    return ss.repeat(mm);
  }

  let eb = s.length - 1;
  let sb = eb;
  for (let r = s.length - 1; r >= 0; r--) {
    const char = s[r];
    if (char === "]") {
      eb = r;
    }

    if (char === "[") {
      let b = r - 1;
      while (!Number.isNaN(Number(s[b]))) {
        b--;
      }
      sb = b + 1;
      const sub = build(s.substring(sb, eb + 1));
      const start = s.slice(0, sb);
      const tail = s.slice(eb + 1);
      s = start + sub + tail;
      r = s.length - 1;
      eb = s.length - 1;
      sb = eb;
    }
  }

  return s;
};

// var decodeString = function (s) {
//   let stack = [];
//   let currentNum = 0;
//   let currentString = "";

//   for (let char of s) {
//     if (!isNaN(char)) {
//       currentNum = currentNum * 10 + Number(char);
//     } else if (char === "[") {
//       stack.push(currentString);
//       stack.push(currentNum);
//       currentString = "";
//       currentNum = 0;
//     } else if (char === "]") {
//       const num = stack.pop();
//       const prevString = stack.pop();
//       currentString = prevString + currentString.repeat(num);
//     } else {
//       currentString += char;
//     }
//   }

//   return currentString;
// };

// console.log(decodeString("3[a]"));
// console.log(decodeString("1[a]"));
// console.log(decodeString("3[a]2[bc]")); // aaabcbc
// console.log(decodeString("3[a2[c]hh]oo")); // accaccacc
// console.log(decodeString("3[a2[c]ff]ii"));
// console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
