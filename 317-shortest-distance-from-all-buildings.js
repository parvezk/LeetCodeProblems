/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    const cells = {
      EMPTY: 0,
      BUILDING: 1,
      OBSTACLE: 2
    },
          DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]],
          n = grid.length,
          m = grid[0].length,
          dp = new Array(n).fill(null).map(x => new Array(m).fill(0)),
          reach = new Array(n).fill(null).map(x => new Array(m).fill(0)),
          queue = [];
    let countBuilding = 0;
    
    const bfs = (queue, grid, dp, reach, n, m) => {
      let level = 1;
      const visited = new Array(n).fill(null).map(x => new Array(m).fill(false));
      
      while (queue.length) {
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
          const curPoint = queue.shift(),
              x = curPoint[0],
              y = curPoint[1];
   
          for (let direction of DIRECTIONS) {
            let dx = x + direction[0],
                dy = y + direction[1];
  
            if (dx < 0 || dx > n - 1 || dy < 0 || dy > m - 1 || grid[dx][dy] != 0 || visited[dx][dy])
              continue;
            
            queue.push([dx, dy]);
            visited[dx][dy] = true;
            dp[dx][dy] += level;
            reach[dx][dy] = reach[dx][dy] + 1;
          }
        }
        level++;
      }
    }
    
    // step 1
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] == 1) {
          queue.push([i, j])
          bfs(queue, grid, dp, reach, n, m);
          countBuilding++;
        }
      }
    }
    
    // step 2
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] == 0 && reach[i][j] == countBuilding) {
          result = Math.min(result, dp[i][j])
        }
      }
    }
    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
  };