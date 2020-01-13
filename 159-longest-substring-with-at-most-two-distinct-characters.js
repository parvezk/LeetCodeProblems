/**
 * @param {string} s
 * @return {number}
 */
// Sliding Window approach 1 (see below for preferred solution)
var lengthOfLongestSubstringTwoDistinct = function(s) {
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
    while (map.size > 2) {
      let startChar = s.charAt(begin++);
      if (map.get(startChar) >= 1) map.set(startChar, map.get(startChar) - 1);
      if (map.get(startChar) == 0) map.delete(startChar);
    }
    ans = Math.max(ans, end - begin);
  }
  return ans;
};

// Sliding Window approach 1 (slighly modified)
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const len = s.length;
  if (len < 3) return len;

  // hashmap character -> its rightmost position in the sliding window
  const map = new Map();

  // sliding window left and right pointers
  let left = 0,
    right = 0;

  let max_len = 2;

  while (right < len) {
    // slide window contains less than 3 characters
    if (map.size < 3) map.set(s.charAt(right), right++);

    // slide window contains 3 characters
    if (map.size == 3) {
      // delete the leftmost character
      let del_idx = Math.min(...map.values());
      map.delete(s.charAt(del_idx));
      // move left pointer of the slide window
      left = del_idx + 1;
    }
    max_len = Math.max(max_len, right - left);
  }
  return max_len;
};
