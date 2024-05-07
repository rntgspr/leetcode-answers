// 2352. Equal Row and Column Pairs
/*
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri
and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order
(i.e., an equal array).

Example 1:
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 

Constraints:
n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 105
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let m = new Map();
  let n = grid.length;

  for (let r = 0; r < n; r++) {
    let row = grid[r].join(",");
    m.set(row, (m.get(row) ?? 0) + 1);
  }

  let t = 0;
  for (let c = 0; c < n; c++) {
    let col = [];
    for (let r = 0; r < n; r++) {
      col.push(grid[r][c]);
    }
    let colKey = col.join(",");
    t += m.get(colKey) ?? 0;
  }

  return t;
};

const given0 = JSON.parse("[[3,2,1],[1,7,6],[2,7,7]]");
const given1 = JSON.parse("[[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]");
console.log(equalPairs(given0));
console.log(equalPairs(given1));
