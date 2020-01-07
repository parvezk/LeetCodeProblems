/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.HashMap = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.HashMap.has(key)) {
    let values = this.HashMap.get(key);
    this.HashMap.delete(key);
    this.HashMap.set(key, values);
    return values[values.length - 1];
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.HashMap.has(key)) {
    let values = this.HashMap.get(key);
    values.push(value);
    this.HashMap.delete(key);
    this.HashMap.set(key, values);
  } else {
    if (this.HashMap.size >= this.capacity) {
      let least = this.HashMap.keys().next().value;
      this.HashMap.delete(least);
    }

    this.HashMap.set(key, [value]);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
