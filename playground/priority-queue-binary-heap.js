(function main() {
    // MAX HEAP
    class HeapType {
    constructor(items) {
      if (items) this.items = [...items];
      else this.items = [];
    }
  
    _swap(p1, p2) {
      const left = this.items[p1];
      this.items[p1] = this.items[p2];
      this.items[p2] = left;
    }
  
    ReheapUp(root = 0, bottom = this.items.length - 1) {
      let parent;
      if (bottom > root) {
        parent = Math.floor((bottom - 1) / 2);
        if (this.items[parent] > this.items[bottom]) {
          this._swap(parent, bottom);
          this.ReheapUp(root, parent);
        }
      }
    }
  
    ReHeapDown(root = 0, bottom = this.items.length - 1) {
      let minChild, rightChild, leftChild;
      leftChild = root * 2 + 1;
      rightChild = root * 2 + 2;
      if (leftChild <= bottom) {
        if (leftChild == bottom) minChild = leftChild;
        else {
          if (this.items[leftChild] >= this.items[rightChild])
            minChild = rightChild;
          else minChild = leftChild;
        }
        if (this.items[root] > this.items[minChild]) {
          this._swap(root, minChild);
          this.ReHeapDown(minChild, bottom);
        }
      }
    }
  }
  
  class PQType {
    constructor(item) {
      this.heap = new HeapType(item);
    }
  
    Dequeue() {
      const item = this.heap.items.shift();
      this.heap.items.unshift(this.heap.items.pop());
      this.heap.ReHeapDown();
      return item;
    }
  
    Enqueue(newItem) {
      this.heap.items.push(newItem)
      this.heap.ReheapUp();
    }
  }
  
  const PQ = new PQType();
  console.log(PQ.heap.items);
  PQ.Enqueue(1);
  PQ.Enqueue(100);
  PQ.Enqueue(9);
  PQ.Enqueue(5);
  PQ.Enqueue(65);
  PQ.Enqueue(3);
  PQ.Enqueue(2);
  console.log(PQ.heap.items);
  
  console.log("\n");
  console.log(PQ.Dequeue());
  console.log(PQ.Dequeue());
  console.log(PQ.Dequeue());
  console.log(PQ.Dequeue());
  console.log(PQ.Dequeue());
  console.log(PQ.Dequeue());
  console.log(PQ.Dequeue());
  
  }());