/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */

// 1. Sliding Window Template based
var lengthOfLongestSubstring = function(s) {
  const map = new Map();

  let ans = 0,
    counter = 0,
    begin = 0,
    end = 0;

  while (end < s.length) {
    let c = s.charAt(end);

    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);

    if (map.get(c) > 1) counter++;
    // Slide right of sliding window
    end++;
    // Sliding left of the window
    while (counter > 0) {
      let startChar = s.charAt(begin++);
      if (map.get(startChar) > 1) counter--;
      map.set(startChar, map.get(startChar) - 1);
    }
    ans = Math.max(ans, end - begin);
  }
  return ans;
};

// 2. Sliding Window
var lengthOfLongestSubstring = function(s) {};

// 3. Sliding Window Optimized
var lengthOfLongestSubstring = function(s) {};

// 4. Brute force
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;

  let substr = "";
  let prev = null;
  let long = 1;

  for (const c of s) {
    if (!substr.includes(c)) substr += c;
    else {
      long = Math.max(long, substr.length);
      substr += c;
      substr = substr.slice(substr.indexOf(c) + 1);
    }
  }

  return Math.max(long, substr.length);
};
