/** */
function twoSum(nums, target) {
  let r = {};
  for (let i = 0; i < nums.length; i++) {
    const d = target - nums[i];
    if (r[d] !== undefined && (nums[r[d]] + nums[i]) === target) return [nums[r[d]], nums[i]];
    r[nums[i]] = i;
  }

  return [];
}  


const tests = [
  [[2,11,7,15], 9], // [0,1]
  [[2,3,4], 6], // [1,2]
  [[3,3], 6], // [0,1]
  [[3,1,1,1,1,1,1,1,1,2,3], 6], // [0,1]
  [[8,1,1,1,1,1,1,1,1,2,6], 14], // [0,1]
  [[-7,1,4,1], -3], // [0,2]
];

tests.forEach(item => console.log('---->',item, twoSum(...item)));

module.exports = { tests, twoSum };