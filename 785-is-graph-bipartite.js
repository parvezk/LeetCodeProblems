/**
 * @param {number[][]} graph
 * @return {boolean}
 */
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartiteUtil = function(graph, src, colorArr) {
  
    colorArr[src] = 1;
    let queue = [src];
    
    while (queue.length) {
      let size = queue.length;
      
      for (let i = 0; i < size; i++) {
        let u = queue.shift();
        
        for (let v of graph[u]) {
          
          if (graph[u].includes(v) && colorArr[v] == -1)
          {
            colorArr[v] = 1 - colorArr[u];
            queue.push(v);
          } 
          else if (graph[u].includes(v) && colorArr[u] == colorArr[v])
            return false;
          else if (!graph[u].includes(v))
            return false
        }
      }
    }
    return true;
  };
  
  var isBipartite = function(graph) {
    
    let colorArr = new Array(graph.length).fill(-1);
    
    for (let i = 0; i < graph.length; i++) {
      if (colorArr[i] == -1) {
        if (isBipartiteUtil(graph, i, colorArr) == false)
          return false;
      }
    }
    return true;
  }