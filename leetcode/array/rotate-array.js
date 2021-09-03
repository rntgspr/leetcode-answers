/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateSimple(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.splice(0, 0, nums.pop());
  }
  return nums;
};

function rotate(nums, k) {
  if (k === nums.length || nums.length <= 1 || k <= 0) return nums;

  if (nums.length === 2) {
    if (k % 2 === 0) return nums;
    const temp = nums[1];
    nums[1] = nums[0];
    nums[0] = temp;
    return nums;
  }

  const right = nums.slice(nums.length - k);
  const left = nums.slice(0, nums.length - k);
  const side = [...right, ...left];
  
  for (let i = 0; i < side.length; i++) {
    nums[i] = side[i];
  }

  return nums;
};

// console.log(rotate([1,2,3,4,5,6,7], 3));
// console.log(rotate([-1,-100,3,99], 3));
// console.log(rotate([1,2], 2));
// console.log(rotate([1,2], 5));

module.export = { rotate, rotateSimple };