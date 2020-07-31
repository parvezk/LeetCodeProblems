/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  if (n < 2) return n;

  let left = 1, right = n;  
  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2),
          res = guess(mid);
    
    if (res == 0) return mid;
    else if (res > 0) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};