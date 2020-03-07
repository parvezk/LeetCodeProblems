/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length == 0) return 0;
    let m = matrix.length, n = matrix[0].length;
    
    const dfs = (matrix, i, j, cached) => {
      if (cached[i][j] != 0) return cached[i][j];
      
        for (let d of dirs) {
          let x = i + d[0], y = j + d[1];
          if (0 <= x && x < m && 0 <= y && y < n && matrix[x][y] > matrix[i][j])
            cached[i][j] = Math.max(cached[i][j], dfs(matrix, x, y, cached));
        }
      
      cached[i][j]++;
      return cached[i][j];
    }
    
    let dirs = [[0,1], [1,0], [0,-1], [-1,0]];
    let cache = new Array(m).fill(null).map(() => new Array(n).fill(0));
    let ans = 0;
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++)
        ans = Math.max(ans, dfs(matrix, i, j, cache));
    }
    
    return ans;
  };