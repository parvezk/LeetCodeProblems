/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = new Map();

  let ans = 0,
    counter = 0,
    begin = 0,
    end = 0;

  while (end < s.length) {
    let c = s.charAt(end);
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);

    // Slide window right
    end++;
    // Slide window left
    while (map.size > k) {
      let startChar = s.charAt(begin++);
      if (map.get(startChar) >= 1) map.set(startChar, map.get(startChar) - 1);
      if (map.get(startChar) == 0) map.delete(startChar);
    }
    ans = Math.max(ans, end - begin);
  }
  return ans;
};
