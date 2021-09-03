/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let wm = new Map([[nums[0], nums[0]]]);
  let acc = nums[0];
  for(let i = 1; i < nums.length; i++) {
    const n = wm.get(nums[i]);
    if (!n) {
      acc = acc + nums[i];
      wm.set(nums[i], nums[i]);
    } else {
      acc -= n;
    }
  }

  return acc;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumberObject(nums) {
  let wm = { [nums[0]]: nums[0] };
  let acc = nums[0];
  for(let i = 1; i < nums.length; i++) {
    const n = wm[nums[i]];
    if (!n) {
      acc = acc + nums[i];
      wm[nums[i]] = nums[i];
    } else {
      acc -= n;
    }
  }

  return acc;
};




const tests = [
  [[2, 2, 1]],
  [[4, 1, 2, 1, 2]],
  [[1]],
  [[1, 0 ,1]],
];

// tests.forEach(item => console.log(item, singleNumber(...item)));

module.exports = { tests, singleNumber, singleNumberObject };