/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  
  const findDist = (x, y) => Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2));
  let map = new Map();
  
  for (let pts of points)
    map.set(pts, findDist([0, 0], pts));
  
  map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
  
  return [...map.keys()].slice(0, K)
};