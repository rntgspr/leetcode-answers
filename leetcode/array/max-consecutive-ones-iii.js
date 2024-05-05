/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in
the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/
/**
 * 1004. Max Consecutive Ones III
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxLen = 0;
  let zeroCount = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    const char = nums[end];
    if (char === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[start] === 0) {
        zeroCount--;
      }
      start++;
      // console.log("==", start, zeroCount);
    }

    maxLen = Math.max(maxLen, end - start + 1);
    // console.log(nums.slice(start, end + 1));
  }

  return maxLen;
};

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0], 2));
