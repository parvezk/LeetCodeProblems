/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const DFS = (visited, skip, cur, remain) => {
    // Base case: out of bound
    if (remain < 0) return 0;
    // Base case: no remaining numbers
    if (remain == 0) return 1;
    
    // Mark number as visited
    visited[cur] = true;
    
    let res = 0;
    for (let i = 1; i <= 9; i++) {
      // next key must be visited
      // current key and next key are adjacent or skip number is already visited
      if (!visited[i] && (skip[cur][i] == 0 || visited[skip[cur][i]]))
        res += DFS(visited, skip, i, remain - 1);
    }
    visited[cur] = false;
    return res;
  }
  
  
  var numberOfPatterns = function(m, n) {
    // Keep a record of invalid numbers
    // on the path between two selected keys
    let skip = new Array(10).fill(null).map(() => new Array(10).fill(0));
    skip[1][3] = skip[3][1] = 2;
    skip[1][7] = skip[7][1] = 4;
    skip[3][9] = skip[9][3] = 6
    skip[7][9] = skip[9][7] = 8;
    skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip[7][3] = skip[4][6] = skip[6][4] = 5;
    
    const visited = new Array(10).fill(false);
    let res = 0;
    
    for (let i = m; i <= n; i++) {
      // user the symmetry to reduce DFS call
      res += DFS(visited, skip, 1, i - 1) * 4;
      res += DFS(visited, skip, 2, i - 1) * 4;
      res += DFS(visited, skip, 5, i - 1);
    }
    return res;
  };
  