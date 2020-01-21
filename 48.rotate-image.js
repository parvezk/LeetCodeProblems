/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Sort of Brute-force, self-approach
var rotate = function(matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let i = 0,
    j = 0;
  // transpose
  while (i < m && j < n) {
    for (let k = i; k < n; k++) {
      let tmp = matrix[i][k];
      matrix[i][k] = matrix[k][i];
      matrix[k][i] = tmp;
    }
    i++;
    j++;
  }
  // reverse rows
  for (row of matrix) row.reverse();
};
