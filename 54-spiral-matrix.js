/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Simulation Approach
var spiralOrder = function(matrix) {};

// Layer by Layer
var spiralOrder = function(matrix) {
  const output = [];
  if (matrix.length == 0) return output;

  let r1 = 0,
    r2 = matrix.length - 1,
    c1 = 0,
    c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    // top-slide: c from c1....c2
    for (let c = c1; c <= c2; c++) output.push(matrix[r1][c]);

    // right-slide: r from r1+1...r2
    for (let r = r1 + 1; r <= r2; r++) output.push(matrix[r][c2]);

    if (r1 < r2 && c1 < c2) {
      // bottom-slide: c from c2+1...c1+1
      for (let c = c2 - 1; c > c1; c--) output.push(matrix[r2][c]);

      // left-slide: r from r2+1....r1+1
      for (let r = r2; r > r1; r--) output.push(matrix[r][c1]);
    }

    r1++; // move top to bottom
    c1++; // move left to right
    r2--; // backtrack right to left
    c2--; // backtrack bottom to top
  }

  return output;
};
