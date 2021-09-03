/**
 * @param {string} unique
 * @return {number}
 */
function firstUniqChar(unique) {
  const count = new Map();
  for (let i = 0; i < unique.length; i++) {
    count.set(unique[i], (count.get(unique[i]) || 0) + 1);
  }

  const [letter] = [...count].find(f => f[1] === 1) || [];
  return unique.indexOf(letter);
};


// leetcode -> 0
// loveleetcode -> 2
// aabb -> -a

module.export = { firstUniqChar };
