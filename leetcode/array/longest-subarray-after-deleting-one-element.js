// 1493. Longest Subarray of 1's After Deleting One Element
/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.
Return 0 if there is no such subarray.

Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const splt = nums.join("").split("0");
  if (splt.length === 1) {
    return splt[0].length - 1;
  }

  let max = -Infinity;
  for (let i = 1; i < splt.length; i++) {
    const len = splt[i].length + splt[i - 1].length;
    max = Math.max(max, len);
  }

  return max;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
