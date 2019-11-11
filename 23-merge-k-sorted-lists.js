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
class HeapType {
    
    constructor() {
      this.elements = [];
    }
  
    ReheapUp(root, bottom) 
    {
      let parent;
      if (bottom > root) {
        parent = Math.floor((bottom) / 2);
        if (this.elements[parent] > this.elements[bottom]) 
        {
          const left = this.elements[parent];
          this.elements[parent] = this.elements[bottom];
          this.elements[bottom] = left;
          this.ReheapUp(root, parent);
        }
      }
    }
  
    ReHeapDown(root, bottom) {
      let minChild, 
          rightChild, 
          leftChild;

      leftChild = root * 2;
      rightChild = root * 2 + 1;

      if (leftChild <= bottom)
      {
        if (leftChild == bottom) 
            minChild = leftChild;
        else
        {
          if (this.elements[leftChild] >= this.elements[rightChild])
            minChild = rightChild;
          else
            minChild = leftChild;
        }
        if (this.elements[root] > this.elements[minChild])
        {
            const left = this.elements[root];
            this.elements[root] = this.elements[minChild];
            this.elements[minChild] = left;
            this.ReHeapDown(minChild, bottom);
        }
      }
    }
  }

class PQType {
  constructor() {
    this.heap = new HeapType();
    this.length = 0;
  }

  Dequeue() {
    if (this.heap.elements.length == 0)
      return null;
    const item = this.heap.elements[0];
    this.heap.elements[0] = this.heap.elements[this.length - 1];
    this.length--;
    this.heap.elements.length = this.length;
    this.heap.ReHeapDown(0, this.length - 1);
    return item;
  }

  Enqueue(newItem) {
    this.length++;
    this.heap.elements[this.length - 1] = newItem;
    this.heap.ReheapUp(0, this.length - 1);
  }
}

var mergeKLists = function(lists) {
  if (lists.length < 1) return null;
  else if (lists.length == 1) return lists[0];
  
  const PQ = new PQType();
  for (list of lists) {
     while (list !== null) {
      PQ.Enqueue(list.val)
      list = list.next;
     }
  }

  if (PQ.length == 0) return null;
  const sortedList = new ListNode(PQ.Dequeue());
  
  let head = sortedList;
  while (PQ.length) {
    head.next = new ListNode(PQ.Dequeue());
    head = head.next;
  }
  
  return sortedList;
}