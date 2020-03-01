/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

const buildGraph = (g, equations, values) => {
    
    let index = 0;
    for (let e of equations) {
      let a = e[0], b = e[1];
      
      if (!g.has(a)) g.set(a, new Map());
      if (!g.has(b)) g.set(b, new Map());
      
      g.get(a).set(b, values[index]);
      g.get(b).set(a, 1.0 / values[index]);
      index++;
      g.get(a).set(a, 1.0);
      g.get(b).set(b, 1.0);
    }
    return g;
  }

const dfs = (g, a, b, res, index, visited, tmp) => {
  visited.add(a);
  
  if (g.get(a) == null || g.get(a).size == 0)
    return;
  
  if (g.get(a).has(b)) {
    res[index] = g.get(a).get(b) * tmp;
    return;
  }
  
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
  for (let q of queries) {
    let a = q[0], b = q[1];
    
    if (!g.has(a) || !g.has(b)) {
      index++;
      continue;
    } else {
      dfs(g, a, b, res, index, new Set(), 1.0);
      index++;
    }
  }
  return res;
};