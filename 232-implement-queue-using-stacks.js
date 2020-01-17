/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.size() > 0) return this.queue.shift();
  else return null;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.size() > 0) return this.queue[0];
  else return null;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.size() === 0;
};
/**
 * Return the length of the queue
 * @return {int}
 */
MyQueue.prototype.size = function() {
  return this.queue.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
