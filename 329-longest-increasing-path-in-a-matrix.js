/**
 * @param {number[][]} matrix
 * @return {number}
 */
// DP / DFS + Memoization
var longestIncreasingPath = function(matrix) {
  if (!matrix.length) return 0;
  
  let m = matrix.length, n = matrix[0].length,
      dirs = [[0,1], [1,0], [0,-1], [-1,0]],
      cache = new Array(m).fill(null).map(() => new Array(n).fill(0)),
      ans = 0;
  
  const dfs = (matrix, i, j) => {
    if (cache[i][j]) return cache[i][j];
    
      for (let d of dirs) {
        let x = i + d[0], y = j + d[1];

        if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j])
          cache[i][j] = Math.max(cache[i][j], dfs(matrix, x, y));
      }
    
    cache[i][j]++;
    return cache[i][j]
  }
  
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      ans = Math.max(ans, dfs(matrix, i, j));
  
  return ans;
};