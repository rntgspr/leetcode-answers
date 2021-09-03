/** */
function rotateAlt(matrix) {
  const l = matrix.length;
  for (let x = 0; x < l; x++) {
    for (let y = l - 1; y >= 0; y--) {
      const temp = matrix[y][x];
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }

  return matrix;
}

/** */
function rotate(matrix) {
  const l = matrix.length;
  let alt = [];
  for (let x = 0; x < l; x++) {
    for (let y = l - 1; y >= 0; y--) {
      const tx = l - 1 - x;
      if (!alt[y]) alt[y] = [];
      alt[y][tx] = matrix[x][y];
    }
  }

  for (let x = 0; x < l; x++) {
    for (let y = 0; y < l; y++) {
      matrix[x][y] = alt[x][y];
    }
  }

  return matrix;
}

const matrix1 = [
  [5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]
];

const matrix2 = [
  [1]
];

const matrix3 = [
  [1,2],[3,4]
];

const matrix4 = [
  [1,2,3],[4,5,6],[7,8,9]
];


const tests = [
  [matrix1], // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
  [matrix2], // [[1]]
  [matrix3], // [[3,1],[4,2]]
  [matrix4], // [[7,4,1],[8,5,2],[9,6,3]]
];

// tests.forEach(item => console.log('---->\n', item, '\n', rotateAlt(...item)));

module.exports = { tests, rotate, rotateAlt };