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
  let ans = 0, counter = 0, begin = 0, end = 0;

  while (end < s.length) {
    let c = s.charAt(end);
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);

    if (map.get(c) > 1) counter++;
    // Slide window right
    end++;
    // Slide window left
    while (counter > 0) {
      let startChar = s.charAt(begin++);
      if (map.get(startChar) > 1) counter--;
      map.set(startChar, map.get(startChar) - 1);
    }
    ans = Math.max(ans, end - begin);
  }
  return ans;
};

// 2. Sliding Window [i, j) with Hash Set
// Time: O(2n) = O(n)
// Space: O(min(m, n)); O(k) for window
var lengthOfLongestSubstring = function(s) {
  let n = s.length, ans = 0, i = 0, j = 0;
  const set = new Set();

  while (i < n && j < n) {
    // try to extend the range [i, j]
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else 
        set.delete(s.charAt(i++));
  }
  return ans;
};

// 3. Sliding Window Optimized
var lengthOfLongestSubstring = function(s) {
  let ans = 0, n = s.length;
  // current index of characters
  const map = new Map();
  // try to extend the range [i, j]
  for (let i = 0, j = 0; j < n; j++) {
    if (map.has(s.charAt(j))) 
      i = Math.max(map.get(s.charAt(j)), i);

    ans = Math.max(ans, j - i + 1);
    map.set(s.charAt(j), j + 1);
  }
  return ans;
};

// 4. Brute force
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  let substr = "", prev = null, long = 1;

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
