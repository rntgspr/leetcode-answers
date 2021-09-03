/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (palindrome) => {
  const clear = palindrome.replace(/\W|_/g, "").toLowerCase();

  let left = 0;
  let right = clear.length - 1;

  while (left < right) {
    if (clear.charAt(left) !== clear.charAt(right)) return false;
    left += 1;
    right -= 1;
  }

  return true;
};

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

module.export = { isPalindrome };
