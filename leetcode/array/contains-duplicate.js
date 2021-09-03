/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let i = 0;
  let l = [];
  while(i < nums.length) {
    if (l.indexOf(nums[i]) > -1) return true;
    l.push(nums[i]);
    i++;
  }

  return false;
};

// [1,2,3,1] -> true
// [1,2,3,4] -> false

module.export = { containsDuplicate };
