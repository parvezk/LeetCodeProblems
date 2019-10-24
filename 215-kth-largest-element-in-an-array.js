/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// prettier-ignore
class Heap {
    constructor(item) {
      this.elements = [];
      if (item) this.elements.push(item);
    }
  
    ReheapUp(root, bottom) 
    {
      let parent;
      if (bottom > root) {
        parent = Math.floor((bottom - 1) / 2);
        if (this.elements[parent] < this.elements[bottom]) 
        {
          const left = this.elements[parent];
          this.elements[parent] = this.elements[bottom];
          this.elements[bottom] = left;
          this.ReheapUp(root, parent);
        }
      }
    }
  
    ReHeapDown(root, bottom)
    {
      let minChild, 
          rightChild, 
          leftChild;
  
      leftChild = root * 2 + 1;
      rightChild = root * 2 + 2;
      if (leftChild <= bottom)
      {
        if (leftChild == bottom) 
            minChild = leftChild;
        else
        {
          if (this.elements[leftChild] <= this.elements[rightChild])
            minChild = rightChild;
          else
            minChild = leftChild;
        }
        if (this.elements[root] < this.elements[minChild])
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
  constructor(item) {
    this.items = new Heap(item);
    this.length = 0;
  }

  Dequeue() {
    const item = this.items.elements[0];
    this.items.elements[0] = this.items.elements[this.length - 1];
    this.length--;
    this.items.ReHeapDown(0, this.length - 1); // RHEAP UP
    return item;
  }

  Enqueue(newItem) {
    this.length++;
    this.items.elements[this.length - 1] = newItem;
    this.items.ReheapUp(0, this.length - 1); // REHEAP DOWN
  }
}

var findKthLargest = function(nums, k) {
  const PQ = new PQType();
  for (n of nums) {
    PQ.Enqueue(n);
  }
  //console.log(PQ.items.elements);
  let K = 0;
  for (let i = 1; i <= k; i++) K = PQ.Dequeue();

  return K;
};
