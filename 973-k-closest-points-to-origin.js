/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  
    // Distance formula
    const findDist = (x, y) => Math.sqrt(
      Math.pow((y[0] - x[0]), 2) + Math.pow(y[1] - x[1], 2));
    
    let map = new Map();
    
    for (let pts of points)
      map.set(pts, findDist([0,0], pts))
    
    map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
    
    //console.log(map)
    return [...map.keys()].slice(0, K)
    
  };