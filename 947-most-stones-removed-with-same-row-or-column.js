/**
 * @param {number[][]} stones
 * @return {number}
 */

// Disjoint Set Union. (DSU) data structure
class DSU {
  constructor(N){
    this.parent = new Array(N).fill(null);
    this.parent = this.parent.map((v, i) => i);
  }
  
  find(x) {
    if (this.parent[x] != x)
      this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  
  union(x, y) {
    this.parent[this.find(x)] = this.find(y);
  }
}

var removeStones = function(stones) {
  const N = stones.length,
        dsu = new DSU(20000);
  
  for (let stone of stones)
    dsu.union(stone[0], stone[1] + 10000);
  
  const seen = new Set();
  for (let stone of stones)
    seen.add(dsu.find(stone[0]));
  
  return N - seen.size;
};