/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  let grid = new Set();

  for (let point of points)
    grid.add(point[0] + ',' + point[1]);

  let ans = Number.MAX_SAFE_INTEGER;
  const lastx = new Map();

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {

      let p1 = points[i], p2 = points[j];
      let x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1];

      if (x1 != x2 && y1 != y2) {
        if (grid.has(x1 + ',' + y2) && grid.has(x2 + ',' + y1)) {
          let area = Math.abs(y2 - y1) * Math.abs(x2 - x1);
          ans = Math.min(ans, area);
        }
      }
    }
  }

  return ans == Number.MAX_SAFE_INTEGER ? 0 : ans;
};