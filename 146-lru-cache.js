/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const values = this.cache.get(key);
    this.cache.delete(key)
    this.cache.set(key, values);
    return values[values.length - 1];
  }
  else
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    const values = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, [...values, value]);
  } else {
    if (this.cache.size >= this.capacity) {
      const least = this.cache.keys().next().value;
      this.cache.delete(least);
    }
    
    this.cache.set(key, [value]);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */