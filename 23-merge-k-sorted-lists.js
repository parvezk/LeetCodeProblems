/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const top = 0,
      parent = i => ((i + 1) >> 1) - 1,
      left = i => (i << 1) + 1,
      right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = [];
    this._comparator = comparator;
  }
  
  size = () => this._heap.length;
  peek = () => this._heap[top];

  enqueue = val => {
    this._heap.push(val);
    this._ReHeapUp();
  }
  
  dequeue = () => {
    const popVal = this.peek(),
          bottom = this.size() - 1;
    if (bottom > top) this._swap(top, bottom);
    this._heap.pop();
    this._ReHeapDown();
    return popVal;
  }
  
  _greater = (i, j) => this._comparator(this._heap[i], this._heap[j]);
  _swap = (i, j) => [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  
  _ReHeapUp = () => {
    let bottom = this.size() - 1;
    while (bottom > top && this._greater(bottom, parent(bottom))) {
      this._swap(bottom, parent(bottom));
      bottom = parent(bottom);
    }
  }
  
  _ReHeapDown = () => {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))) 
    {
      let maxChild = this._greater(right(node), left(node)) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

var mergeKLists = function(lists) {
  if (lists.length < 1) return null;
  else if (lists.length == 1) return lists[0];
  
  const PQ = new PriorityQueue();
  for (let list of lists) {
    while (list != null) {
      PQ.enqueue(list.val);
      list = list.next;
    }
  }
  
  if (!PQ.size()) return null;
  
  const sortedList = new ListNode(PQ.dequeue());
  let head = sortedList;
  
  while (PQ.size()) {
    head.next = new ListNode(PQ.dequeue());
    head = head.next;
  }
  return sortedList;
}