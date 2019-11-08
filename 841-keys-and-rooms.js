/**
 * Keys and Rooms
 */

var canVisitAllRooms = function(rooms) {
  
    const visited = new Set([0]);
    let stack = new Stack(rooms[0]);
    
    while (!stack.isEmpty())
    {
      const curr = stack.pop();
      
      for (let i=0; i<curr.length; ++i)
      {
        const keyList = rooms[curr[i]];
        if (!visited.has(curr[i]))
        {
          if (keyList.length > 0) 
            stack.push(keyList)
  
          visited.add(curr[i]);
        }
      }
    }
    //console.log(visited, 'finished')
   return visited.size == rooms.length
  };
  