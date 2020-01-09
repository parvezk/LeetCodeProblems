/**
 * Initialize your data structure here.
 */
var Logger = function() {
  this.HashMap = new Map();
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (!this.HashMap.has(message)) {
    this.HashMap.set(message, timestamp);
    return true;
  } else {
    let prev = this.HashMap.get(message);
    if (timestamp - prev >= 10) {
      this.HashMap.set(message, timestamp);
      return true;
    } else {
      return false;
    }
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
