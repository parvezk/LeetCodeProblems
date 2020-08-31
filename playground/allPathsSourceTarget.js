//https://leetcode.com/problems/all-paths-from-source-to-target/

// TODO: NOT WORKING

(function main() {
    
    var allPathsSourceTarget = function(graph) {
    const N = graph.length - 1;
    const output = [];
    
    DFS = (cur, N, path, visited) => {
      path.push(cur)
      if (cur == N) {
        output.push(path)
        return true;
      }
      for (let next of graph[cur]) {
        if (!visited.has(next)) {
          visited.add(next);
          if (DFS(next, N, path, visited) == true)
            return true;
        }
      }
      return false;
    }
    
    console.log(DFS(0, N, [], new Set()));
    console.log(output)
    return []
  };
  
  =====================
  const DFS = (graph) => {
    let target = graph.length - 1;
    let output = []
    
    let visited = new Set();
    let s = [0];
    let path = [];
    
    while (s.length) {
  
      let cur = s.pop();
      path.push(cur)
      
      if (cur == target) {
        output.push(path);
        visited = new Set();
        path = [0];
      }
      
      for (let next of graph[cur]) {
        if (!visited.has(next)) {
          visited.add(next);
          s.push(next);
        }
      }
    }
    return output;
  }
  var allPathsSourceTarget = function(graph) {
    return DFS(graph);
  };
    
  }());