/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class MyCircularQueue {
  constructor(k) {
    this.data = new Array(0);
    this.MAX_ITEMS = k;
    this.size = 0;
  }

  enQueue = value => {
    if (this.size < this.MAX_ITEMS) {
      this.data.push(value);

      this.size++;
      return true;
    } else return false;
  };

  deQueue = () => {
    if (this.size > 0) {
      this.data.shift();
      this.size--;
      return true;
    } else return false;
  };

  Front = () => {
    if (this.size) return this.data[0];
    else return -1;
  };

  Rear = () => {
    if (this.size) return this.data[this.size - 1];
    else return -1;
  };

  isEmpty = () => this.size === 0;
  isFull = () => this.size === this.MAX_ITEMS;
  getSize = () => this.size;
}

/**
   * Insert an element into the circular queue. Return true if the operation is successful. 
   * @param {number} value
   * @return {boolean}
   MyCircularQueue.prototype.enQueue = function(value) {};
   */

/**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   MyCircularQueue.prototype.deQueue = function() {};
   */

/**
   * Get the front item from the queue.
   * @return {number}
   MyCircularQueue.prototype.Front = function() {};
   */

/**
   * Get the last item from the queue.
   * @return {number}
   MyCircularQueue.prototype.Rear = function() {};
   */

/**
   * Checks whether the circular queue is empty or not.
   * @return {boolean}
   MyCircularQueue.prototype.isEmpty = function() {};
   */

/**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   MyCircularQueue.prototype.isFull = function() {};
   */

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
