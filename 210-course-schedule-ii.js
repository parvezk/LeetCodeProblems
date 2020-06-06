/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let isPossible = true, adjList = new Map(), 
        topologicalOrder = new Array(numCourses).fill(0),
        indegree = new Array(numCourses).fill(0)
    
    // Create the adjacency list representation of the graph
    for (let course of prerequisites) {
      let v = course[0], u = course[1];
      
      if (adjList.has(u)) adjList.get(u).add(v);
      else adjList.set(u, new Set([v]));
      
      if (!adjList.has(v)) adjList.set(v, new Set());
      // Record in-degree of each vertex
      indegree[v] += 1;
    }
    
    // Topological Sort
    let queue = [];
   // Add all vertices with 0 in-degree to the queue
    for (let i = 0; i < numCourses; i++)
      if (indegree[i] == 0) queue.push(i);
    
    let i = 0;
    // Process until the Q becomes empty
    while (queue.length) {
      let node = queue.shift();
      topologicalOrder[i++] = node;
      let neighbors = adjList.get(node);
  
      if (neighbors) {
        for (let next of neighbors) {
          // Reduce the in-degree of each neighbor by 1
          indegree[next]--;
          
          // If in-degree of a neighbor becomes 0, add it to the Q
          if (indegree[next] == 0) 
            queue.push(next);
        }
      }
    }
  
    if (i == numCourses) return topologicalOrder;
    else return [];
  };