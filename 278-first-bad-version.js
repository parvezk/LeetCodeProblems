/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return (n => {
        if (!isBadVersion(n - 1))
          return n;
      
      let left = 1, right = n;
      while (left < right) {
        const mid = left + Math.trunc((right - left) / 2);
        
        if (!isBadVersion(mid))
          left = mid + 1;
        else
          right = mid
      }
      return left;
    });
};