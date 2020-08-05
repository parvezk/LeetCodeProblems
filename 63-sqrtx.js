/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    
    let left = 0,
        right = Math.trunc(x / 2);
    
    while (left <= right) {
      const mid = left + Math.trunc((right - left) / 2),
            num = mid * mid;
      
      if (num < x) left = mid + 1;
      else if (num > x) right = mid - 1;
      else if (num == x) return mid;
    }
    return right;
  };