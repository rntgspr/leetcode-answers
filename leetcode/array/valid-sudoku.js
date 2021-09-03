/** */
function isValidSudoku(board) {
  let rs = new Map();
  let bs = new Map();
  for (let l = 0; l < board.length; l++) {
    let ls = new Set();
    for (let r = 0; r < board[l].length; r++) {
      const c = board[l][r];
      if (board[l][r] !== '.') {
        if (ls.has(c)) return false;
        ls.add(c);

        const rc = r % 9;
        if (!rs.has(rc)) rs.set(rc, new Set());
        if (rs.get(rc).has(c)) return false;
        rs.get(rc).add(c);

        const bc = `${l - l % 3},${r - r % 3}`;
        if (!bs.has(bc)) bs.set(bc, new Set());
        if (bs.get(bc).has(c)) return false;
        bs.get(bc).add(c);
      };
    }
  }
  
  return true;
}  

const board1 = [
  ["5","3","1",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]
];

const board2 = [
  ["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]
];

const tests = [
  [board1], // true
  [board2], // false
];

tests.forEach(item => console.log('---->', item, isValidSudoku(...item)));

module.exports = { tests, isValidSudoku };