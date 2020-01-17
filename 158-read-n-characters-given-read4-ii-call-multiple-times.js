/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
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

  let tmp = new Array(4).fill(null),
    tmpPtr = 0,
    tmpCnt = 0;

  return function(buf, n) {
    let total = 0;

    while (total < n) {
      if (tmpPtr == 0) tmpCnt = read4(tmp);

      if (tmpCnt == 0) break;

      while (total < n && tmpPtr < tmpCnt) buf[total++] = tmp[tmpPtr++];

      if (tmpPtr == tmpCnt) tmpPtr = 0;
      if (tmpCnt < 4) break;
    }
    return total;
  };
};
