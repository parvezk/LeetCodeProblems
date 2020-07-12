/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

var wallsAndGates = function(rooms) {
  
    const cell = { 'EMPTY': 2147483647, 'GATE' : 0, 'WALL' : -1 },
          DIRECTIONS = [[1,  0], [-1,  0], [0,  1], [0, -1]],
          m = rooms.length;
    
    if (m == 0) return;
    const n = rooms[0].length;
    const queue = [];
    
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (rooms[row][col] == cell.GATE)
          queue.push([row, col]);
      }
    }
  
    while (queue.length)
    {
      const point = queue.shift();
      let row = point[0];
      let col = point[1];
      for (let direction of DIRECTIONS)
      {
        
        let r = row + direction[0]  //compute adjacent
        let c = col + direction[1] // compute adjacent
        
        if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] !== cell.EMPTY)
          continue; // skip when reach -1
        
        rooms[r][c] = rooms[row][col] + 1;
        queue.push([r ,c]);
      }
    }
  };
  