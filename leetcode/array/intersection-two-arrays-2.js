/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function repeating(rep) {
  const m = new Map();
  for (let i = 0; i < rep.length; i ++) {
    m.set(rep[i], (m.get(rep[i]) || 0) + 1);
  }
  return m;
}

function intersectMapping(a, b) {
  let r = [];
  const [big, sml] = [repeating(a), repeating(b)].sort((h,l) => l.size - h.size);

  for (let [k, v] of sml) {
    const bigV = big.get(k);
    if (bigV !== undefined) {
      let rr = Math.min(v, bigV);
      while (rr--) {
        r.push(k);
      };
    }
  }
  
  return r;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(big, small) {
  if (big.length < small.length) return intersect(small, big);

  const r = [];
  const smallM = new Map();
  for (let i = 0; i < small.length; i ++) {
    smallM.set(small[i], (smallM.get(small[i]) || 0) + 1);
  }

  for (let v of big) {
    let smallV = smallM.get(v);
    if (smallV !== undefined) {
      smallV--;
      smallM.set(v, smallV);
      if (smallV >= 0) r.push(v);
    }
  }
  
  return r;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 function intersectInverted(small, big) {
  if (big.length < small.length) return intersect(small, big);

  const r = [];
  const smallM = new Map();
  for (let i = 0; i < small.length; i ++) {
    smallM.set(small[i], (smallM.get(small[i]) || 0) + 1);
  }

  for (let v of big) {
    let smallV = smallM.get(v);
    if (smallV !== undefined) {
      smallV--;
      smallM.set(v, smallV);
      if (smallV >= 0) r.push(v);
    }
  }
  
  return r;
};

const tests = [
  // [[1,2,2,1], [2,2]],
  [[4,9,5], [9,4,9,8,4]],
  // [[4,9,5], [9,4,9,8,4,9,9,9,11,9,2]],
  // [[4,9,5,7,25,11,99,22], [9, 7]],
  // [[], []],
  // [[1], [0]],
  // [[2], [2]],
  [[3, 1, 2], [1, 1]],
];

// tests.forEach(item => console.log('---->',item, intersect(...item)));

module.exports = { tests, intersectMapping, intersectInverted, intersect };