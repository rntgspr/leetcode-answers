/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let w = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[w] < nums[i]) {
      w++;
    }

    nums[w] = nums[i];

    if (w < i) {
      nums[i] = "_";
    }
  }
  return w + 1;
};

// let numzz = [-2,-1,-1,0,1,1,2,3,3,3];
// console.log(removeDuplicates(numzz), numzz);
// numzz = [1,1,2];
// console.log(removeDuplicates(numzz), numzz);

module.export = { removeDuplicates };