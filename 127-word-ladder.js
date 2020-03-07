/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

class Graph {
  // constructor
  constructor() {
    this.g = new Map();
  }
  
  addVertex(u) {
    if (!this.g.has(u))
      this.g.set(u, new Set());
  }

  addEdge(u, v) {
    if (!this.g.has(u))
      this.addVertex(u);
    this.g.get(u).add(v);
  }
  
  get(u) {
    if (this.g.has(u))
      return this.g.get(u)
    else
      return null;
  }
}

const BFS = (graph, source, target) => {
    const queue = [], visited = new Set();
    let step = 0;
    // initialize
    queue.push(source);
    visited.add(source);
    // BFS
    while (queue.length) {
      // iterate the nodes already in the queue
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let curr = queue.shift();
        if (curr == target) return step;
        //process neighbors
        let neighbors = Array.from(graph.get(curr)) || [];
        for (let next of neighbors) {
          if (!visited.has(next)) {
            queue.push(next);
            visited.add(next);
          }
        }
      }
      step = step + 1;
    }
    return -1;
  };

const transform = w => {
  let arr = [], word = '';
  for (let i = 0; i < w.length; i++) {
    word = w.slice(0, i) + '*' + w.slice(i + 1);
    arr.push(word)
  }
  return arr;
}

var ladderLength = function(beginWord, endWord, wordList) {
  // ["hot","dot","dog","lot","log","cog"]
  if (!wordList.includes(endWord) || wordList.lenght == 0)
    return 0;
  
  wordList.unshift(beginWord);
  let graph = new Graph(),
      transforms = new Set(),
      len = wordList.length;
  
  let transformA, transformB;
  
  for (let i = 0; i < len; i++) {
    let u = wordList[i];
    
    graph.addVertex(u);
    transformA = transform(u);
    
    for (let j = i + 1; j < len; j++) {
      let v = wordList[j];
      transformB = transform(v);
      
      for (t of transformB) {
         if (transformA.includes(t)) {
           graph.addEdge(u, v);
           graph.addEdge(v, u);
         }
      }
    }  
  }
  
  let path = BFS(graph, beginWord, endWord);
  //console.log(path)
  return path + 1;
};