/**
 * @param {number[][]} intervals
 * @return {number}
 */
function getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

function getLeftChildIndex(index) {
  return index * 2 + 1;
}

function getRightChildIndex(index) {
  return index * 2 + 2;
}

function hasLeftChild(array, index) {
  return getLeftChildIndex(index) < array.length;
}

function hasRightChild(array, index) {
  return getRightChildIndex(index) < array.length;
}

function swap(array, index1, index2) {
  const value = array[index1];
  array[index1] = array[index2];
  array[index2] = value;
}

function heapifyUp(array, compare) {
  let currentIndex = array.length - 1;

  while (currentIndex > 0) {
    let parentIndex = getParentIndex(currentIndex);

    if (compare(array[parentIndex], array[currentIndex]) > 0) {
      swap(array, parentIndex, currentIndex);
      // move the current index to the parent so the loop can continue
      currentIndex = parentIndex;
    } else {
      break;
    }
  }
}

function heapifyDown(array, compare) {
  let currentIndex = 0;
  while (hasLeftChild(array, currentIndex)) {
    let smallerChildIndex = getLeftChildIndex(currentIndex);

    if (hasRightChild(array, currentIndex)) {
      let rightChildIndex = getRightChildIndex(currentIndex);

      if (compare(array[smallerChildIndex], array[rightChildIndex]) > 0) {
        smallerChildIndex = rightChildIndex;
      }
    }

    if (compare(array[currentIndex], array[smallerChildIndex]) > 0) {
      swap(array, currentIndex, smallerChildIndex);
      // move down the tree to the previous location of the smaller child
      currentIndex = smallerChildIndex;
    } else {
      break;
    }
  }
}

//-----------------------------------------------------------------------------
// BinaryHeap Class
//-----------------------------------------------------------------------------
const array = Symbol("array");
const compare = Symbol("compare");

class BinaryHeap {
  constructor(comparator = (a, b) => a - b) {
    this[array] = [];
    this[compare] = comparator;
  }

  add(data) {
    this[array].push(data);
    heapifyUp(this[array], this[compare]);
  }

  isEmpty() {
    return this[array].length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty.");
    }

    return this[array][0];
  }

  poll() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty.");
    }
    if (this[array].length > 1) {
      const topValue = this[array][0];
      const replacementValue = this[array].pop();
      this[array][0] = replacementValue;
      heapifyDown(this[array], this[compare]);
      // finally, return the value
      return topValue;
    } else {
      return this[array].pop();
    }
  }

  get size() {
    return this[array].length;
  }

  includes(value) {
    return this[array].includes(value);
  }

  [Symbol.iterator]() {
    return this.values();
  }

  values() {
    return this[array].values();
  }

  toString() {
    return [...this[array]].toString();
  }
}

var minMeetingRooms = function(intervals) {
  if (intervals.length == 0) return 0;
  if (intervals.length == 1) return 1;

  // sort by meet start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Maintain max-heap of end times
  const heap = new BinaryHeap();
  //add the first meet end time
  heap.add(intervals[0][1]);

  let roomNum = 1,
    maxRooms = 1;

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];

    if (interval[0] >= heap.peek()) {
      // remove meeting ended
      let ended = heap.poll();
      heap.add(interval[1]);
    } else {
      // introduce new meet toom
      roomNum++;
      heap.add(interval[1]);
    }
    maxRooms = Math.max(maxRoom, roomNum);
  }
  return maxRooms;
};
