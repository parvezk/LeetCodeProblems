/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

// MAX HEAP
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() { return this._heap.length; }

  peek() { return this._heap[top]; }
  
  add(value) {
      this._heap.push(value);
      this._siftUp();
  }
  poll() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

class Worker {
  constructor(q, w) {
    this.quality = q;
    this.wage = w;
    this.rate = w * 1.0 / q;
  }
}

var mincostToHireWorkers = function(quality, wage, K) {
  let N = quality.length;
  let workers = [];
  
  for (let i = 0; i < N; i++)
    workers.push(new Worker(quality[i], wage[i]));
    
  workers.sort( (a, b) => a.rate - b.rate);
  
  const PQ = new PriorityQueue();
  let sum = 0;
  for (let i = 0; i < K; i++) {
    PQ.add(workers[i].quality);
    sum += workers[i].quality;
  }
  
  let min = sum * workers[K - 1].rate;
  
  for (let i = K; i < N; i++) {
    let max = PQ.poll();
    PQ.add(workers[i].quality)
    sum = sum - max + workers[i].quality;
    min = Math.min(min, sum * workers[i].rate);
  }
  
  return min;
};