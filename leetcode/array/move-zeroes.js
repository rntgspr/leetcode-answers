/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let alt = [];
  let c = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      alt.push(nums[i]);
      c++;
    }
    nums[i] = 0;
    if (alt[c]) {
      nums[c] = alt[c];
    }
  }

  return nums;
}

const tests = [
  [[0,1,0,3,12]], // [1,3,12,0,0]
  [[0,0,0,0,0,1,0,0,0,0,0,3,12]], // [1,3,12,0,0]
  [[0]], // [0]
];

tests.forEach(item => console.log('---->',item, moveZeroes(...item)));

module.exports = { tests, moveZeroes };