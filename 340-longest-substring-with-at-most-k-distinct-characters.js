/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = new Map();
  let ans = 0, end = 0, begin = 0;
  
  while (end < s.length) {
    // Slide window right
    let endChar = s.charAt(end++);
    if (map.has(endChar)) map.set(endChar, map.get(endChar) + 1);
    else map.set(endChar, 1);
    
    while (map.size > k) {
      // Slide window left
      let startChar = s.charAt(begin++);
      if (map.get(startChar) >= 1) map.set(startChar, map.get(startChar) - 1);
      if (map.get(startChar) == 0) map.delete(startChar);
    }
    
    ans = Math.max(ans, end - begin);
  }
  return ans;
};