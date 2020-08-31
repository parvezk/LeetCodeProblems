//https://leetcode.com/playground/Y9pXYqNA
(function main() {
    
    const DFS = (source, graph) => {
     const stack = [],
           visited = new Set();
      stack.push(source);
      
      while (stack.length) {
        let node = stack.pop(),
            neighbors = graph.get(node);
        //console.log(node)
  
        for (let next of neighbors) {
  
          stack.push(next);
        }
  
        if (visited.has(node)) return true;
        else visited.add(node);
      }
      return false;
    };
    
  var findOrder = function(numCourses, prerequisites) {
    let graph = new Map(),
        indegree = new Map();
    
    for (let m of prerequisites) {
      for (const n of m) {
        graph.set(n, new Set());
        indegree.set(n, 0);
      }
    }
    
    for (let course of prerequisites) {
      let v = course[0], u = course[1];
      
      if (!graph.get(u).has(v)) {
        graph.get(u).add(v);
        indegree.set(v, indegree.get(v) + 1);
      }
    }
    
    let start = [...indegree.entries()].filter(item => item[1] == 0);
    start = start[0][0]
    //console.log(start)
    console.log(DFS(start, graph));
  }
  
    findOrder(3, [[1,0],[1,2],[0,1]]);  // true
    findOrder(3, [[0,1],[0,2],[1,2]]);  //false
    findOrder(4, [[1,0],[2,0],[3,1],[3,2]]) //true
  }());
  /*
  3
  [[1,0],[1,2],[0,1]]
  3
  [[0,1],[0,2],[1,2]]
  */