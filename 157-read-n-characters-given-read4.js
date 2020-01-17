/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let temp = new Array(4),
      total = 0;

    while (total < n) {
      let count = read4(temp);
      // Incase the file length is longer than required n
      count = Math.min(count, n - total);
      // Transfer characters from read4 to buf
      for (let i = 0; i < count; i++) buf[total++] = temp[i];
      // if all characters read and total is stuck at 3 ie. "abc"
      if (count < 4) break;
    }
    return total;
  };
};
