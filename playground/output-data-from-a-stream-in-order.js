//https://leetcode.com/discuss/interview-question/314733/Bloomberg-or-Output-data-from-a-stream-in-order

// MIN HEAP
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() { //only retrieved the element at the head
    return this._heap[top];
  }
  add(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  poll() { //retrieve or fetch and remove the first element of the Queue
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
      let maxChild =
        right(node) < this.size() && this._greater(right(node), left(node))
          ? right(node)
          : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

(function main() {
  const dataFromStreamInOrder = stream => {
    const PQ = new PriorityQueue();
    let prevMin = 0;
    
    for (let i = 0; i < stream.length; i++) {
      PQ.add(stream[i][0]);
      while (PQ.peek() == prevMin + 1) {
        console.log(PQ.poll());
        prevMin++;
      }
    }
  }
  
  const input = [[1, "abcd"], [2, "efgh"], [6, "dfd"], [4, "mnop"], [5, "qrst"], [3, "ijkl"]];
  dataFromStreamInOrder(input);
}());