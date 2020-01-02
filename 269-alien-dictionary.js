/**
 * @param {string[]} words
 * @return {string}
 */

/**
 * @param {string[]} words
 * @return {string}
 */

class Graph {
  constructor() {
    this.graph = new Map();
    this.inDegree = new Map();
  }

  buildGraph = words => {
    // Add vertices and initialize inDegree
    for (let word of words) {
      for (let c of word) {
        this.graph.set(c, new Set());
        this.inDegree.set(c, 0);
      }
    }
    // Add edges and update indegree for each
    for (let i = 1; i < words.length; i++) {
      const first = words[i - 1],
        second = words[i];
      let len = Math.min(first.length, second.length);

      for (let j = 0; j < len; j++) {
        if (first.charAt(j) != second.charAt(j)) {
          let u = first.charAt(j),
            v = second.charAt(j);

          if (!this.graph.get(u).has(v)) {
            this.graph.get(u).add(v);
            this.inDegree.set(v, this.inDegree.get(v) + 1);
          }
          break;
        }
      }
    }
  };

  topologicalSort() {
    let q = [];
    for (let c of this.graph.keys()) {
      if (this.inDegree.get(c) == 0) q.push(c);
    }

    let str = "";
    while (q.length != 0) {
      let c = q.shift();
      str += c;

      for (let neighbor of this.graph.get(c)) {
        this.inDegree.set(neighbor, this.inDegree.get(neighbor) - 1);
        if (this.inDegree.get(neighbor) == 0) q.push(neighbor);
      }
    }
    return str.length == this.graph.size ? str : "";
  }
}

var alienOrder = function(words) {
  const graph = new Graph();
  graph.buildGraph(words);
  return graph.topologicalSort();
};
