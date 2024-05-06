/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Example 1:
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const numbers = Array.from(new Array(9)).map((_, idx) =>
    (idx + 1).toString()
  );

  function getCommon(...arrays) {
    const counter = new Map();

    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        const char = arrays[i][j];
        counter.set(char, (counter.get(char) ?? 0) + 1);
      }
    }

    return [...counter.entries()]
      .filter((item) => item[1] === arrays.length)
      .map((item) => item[0]);
  }

  function getFromNine(excluded) {
    return numbers.filter((num) => !excluded.includes(num));
  }

  function whatToAddToLine(board, ll, cc) {
    const line = board[ll].filter((item) => item !== ".");
    return getFromNine(line);
  }

  function whatToAddToColumn(board, ll, cc) {
    const column = board.reduce((acc, item) => {
      acc.push(item[cc]);
      return acc;
    }, []);

    return getFromNine(column);
  }

  function whatToAddToBox(board, ll, cc) {
    const boxX = Math.floor(ll / 3) * 3;
    const boxY = Math.floor(cc / 3) * 3;

    let box = [];
    for (let x = boxX; x < boxX + 3; x++) {
      for (let y = boxY; y < boxY + 3; y++) {
        if (board[x][y] !== ".") {
          box.push(board[x][y]);
        }
      }
    }

    return getFromNine(box);
  }

  function whatToAdd(board, ll, cc) {
    const line = whatToAddToLine(board, ll, cc);
    const column = whatToAddToColumn(board, ll, cc);
    const box = whatToAddToBox(board, ll, cc);
    const common = getCommon(line, column, box);
    return common;
  }

  function findEmpty(board) {
    for (let l = 0; l < board.length; l++) {
      for (let c = 0; c < board[l].length; c++) {
        if (board[l][c] === ".") {
          return [l, c];
        }
      }
    }
    return null;
  }

  function solve(board) {
    let node = findEmpty(board);
    if (!node) return true;

    let [l, c] = node;
    let toAdd = whatToAdd(board, l, c);
    for (let k of toAdd) {
      board[l][c] = k;
      if (solve(board)) return true;
      board[l][c] = ".";
    }

    return false;
  }

  solve(board);
  return board;
};

const board0 = JSON.parse(
  `[
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]`
);

console.log(solveSudoku(board0));
