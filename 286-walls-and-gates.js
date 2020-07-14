/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

 // Using BFS
 /**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  
    const cell = { 'EMPTY': Math.pow(2, 32 - 1) - 1, 
                   'GATE' : 0, 
                   'WALL' : -1 },
          
          DIRECTIONS = [[1,  0], [-1,  0], [0,  1], [0, -1]];
  
    const distanceToNearestGate = (rooms, startRow, startCol) => {
      
      const m = rooms.length, n = rooms[0].length,
            distance = new Array(m).fill(null).map(x => new Array(n).fill(0)),
            queue = [[startRow, startCol]];
    
      while (queue.length) {
        let point = queue.shift(),
            row = point[0], col = point[1];
  
        for (let direction of DIRECTIONS) {
          let r = row + direction[0],
              c = col + direction[1];
  
          if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] == cell.WALL || distance[r][c] != 0)
            continue;
  
          distance[r][c] = distance[row][col] + 1;
          if (rooms[r][c] == cell.GATE) return distance[r][c];
          queue.push([r, c]);
        }
      }
      return cell.EMPTY;
  }
    
    if (rooms.length == 0) return;
    for (let row = 0; row < rooms.length; row++) {
      for (let col = 0; col < rooms[0].length; col++) {
        
        if (rooms[row][col] == cell.EMPTY)
          rooms[row][col] = distanceToNearestGate(rooms, row, col);
      }
    }
  }

var wallsAndGates = function(rooms) {
    const cell = { 
        'EMPTY': 2147483647, 
        'GATE' : 0, 
        'WALL' : -1 },
        DIRECTIONS = [[1,  0], [-1,  0], [0,  1], [0, -1]];

    if (rooms.length == 0) return;
    for (let row = 0; row < rooms.length; row++) {
      for (let col = 0; col < rooms[0].length; col++) {
        if (rooms[row][col] == cell.GATE)
          queue.push([row, col]);
      }
    }
  
    while (queue.length) {
      const point = queue.shift();
      let row = point[0], col = point[1];
      
      for (let direction of DIRECTIONS) {
        let r = row + direction[0]  //compute adjacent
        let c = col + direction[1] // compute adjacent
        
        if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] != cell.EMPTY)
          continue; // skip when reach -1
        
        rooms[r][c] = rooms[row][col] + 1;
        queue.push([r ,c]);
      }
    }
  };
  