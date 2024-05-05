/*
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum
number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Constraints:
1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104
*/
/**
 * 435. Non-overlapping Intervals
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let total = 0;
  let sorted = intervals.sort((a, b) => a[1] - b[1]);
  let last = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    if (current[0] < last[1]) {
      total++;
    } else {
      last = current;
    }
  }

  return total;
};

const given = [
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [2, 3],
  ],
];
console.log(eraseOverlapIntervals(given[0]));
console.log(eraseOverlapIntervals(given[1]));
console.log(eraseOverlapIntervals(given[2]));

function generateRandomIntervals(numIntervals, startRange, endRange) {
  let intervals = [];
  for (let i = 0; i < numIntervals; i++) {
    let start =
      Math.floor(Math.random() * (endRange - startRange)) + startRange;
    let end = start + Math.floor(Math.random() * (endRange - start) + 1);
    intervals.push([start, end]);
  }
  return intervals;
}

let numIntervals = parseInt(Math.random() * 12, 10);
let startRange = -520;
let endRange = 520;
let randomIntervals = generateRandomIntervals(
  numIntervals ?? 1,
  startRange,
  endRange
);

console.log(randomIntervals);
console.log(eraseOverlapIntervals(randomIntervals));
