/*
605. Can Place Flowers
You have a long flowerbed in which some of the plots are planted, and some are not. However,
flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not
empty, and an integer n, return true if n new flowers can be planted in the flowerbed without
violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 
Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

/**
 * 605. Can Place Flowers
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let spots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed?.[i - 1] ?? 0;
    const current = flowerbed[i];
    const next = flowerbed?.[i + 1] ?? 0;

    if (prev === 0 && current !== 1 && next === 0) {
      spots++;
      flowerbed[i] = 1;
    }
  }

  return spots >= n;
};

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([1, 0, 1, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([0, 0, 1, 0, 0, 1], 2));
// console.log(canPlaceFlowers([0, 0, 0, 1, 0, 0, 1], 2));
// console.log(canPlaceFlowers([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], 4));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
// [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
