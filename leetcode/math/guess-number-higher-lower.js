// 374. Guess Number Higher or Lower
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */
var guess = function (num) {
  const pick = 6;
  return num > pick ? -1 : num < pick ? 1 : 0;
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1;
  let h = n;
  let m = Math.floor((l + h) / 2);

  while (l <= h) {
    m = Math.floor((l + h) / 2);
    const guessed = guess(m);
    if (guessed === 0) return m;
    if (guessed === -1) h = m - 1;
    if (guessed === 1) l = m + 1;
  }

  return result;
};

console.log(guessNumber(10));
