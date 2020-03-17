/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
};

/** 
* @param {number} row 
* @param {number} col 
* @param {number} val
* @return {void}
*/
NumMatrix.prototype.update = function(row, col, val) {
this.matrix[row][col] = val;
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
let res = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      res += this.matrix[i][j];
    }
  }
return res;
};

/** 
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* obj.update(row,col,val)
* var param_2 = obj.sumRegion(row1,col1,row2,col2)
*/