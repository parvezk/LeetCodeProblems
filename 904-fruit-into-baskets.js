/**
 * @param {number[]} tree
 * @return {number}
 */
/*
[1,2,1]
[0,1,6,6,4,4,6]
[0,1,2,2]
[1,2,3,2,2]
[3,3,3,1,2,1,1,2,3,3,4]
[1,0,0,0,1,0,4,0,4]
*/
var totalFruit = function(trees) {
  let map = new Map(), set = new Set([trees[0]]);
      prev = trees[0], start = 0, count = 1;
  
  trees.reduce((accum, elem, index) => {
    set.add(elem)
    
    if (set.size > 2) {
      map.set(start, count)
      let segment = trees.slice(start + 1, index)

      count = 0;
      
      let back = index - 1;
      while (trees[back] == prev) {
        count++;
        back--;
      }

      start = index - 1;
      set = new Set([prev, elem]);
    }
    
    count++;
    prev = elem;
  });
  
  map.set(start, count)
  //console.log(map)
  return Math.max(...map.values())
}