/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

const buildGraph = (g, equations, values) => {
    
  let index = 0;
  for (let eq of equations) {
    let a = eq[0], b = eq[1];
    
    if (!g.has(a)) g.set(a, new Map());
    if (!g.has(b)) g.set(b, new Map());
    
    g.get(a).set(b, values[index]);
    g.get(a).set(a, 1.0);
    g.get(b).set(a, (1.0 / values[index]));
    g.get(b).set(b, 1.0);
    index++;
  }
}

const dfs = (g, a, b, res, index, visited = new Set(), tmp = 1.0) => {
visited.add(a);
// no left side of equation found
if (g.get(a) == null || !g.get(a).size) return;
// left and right side of the equation found
if (g.get(a).has(b)) {
  res[index] = g.get(a).get(b) * tmp;
  return;
}
// only left side found; find the right side
for (let next of g.get(a).keys()) {
  if (visited.has(next)) continue;
  dfs(g, next, b, res, index, visited, g.get(a).get(next) * tmp);
}
}

var calcEquation = function(equations, values, queries) {
let g = new Map(),
    res = new Array(queries.length).fill(-1);

buildGraph(g, equations, values);

let index = 0;
for (let eq of queries) {
  let a = eq[0], b = eq[1];
  
  if (!g.has(a) || !g.has(b)) {
    index++;
  } else {
    dfs(g, a, b, res, index);
    index++;
  }
}
return res;
};