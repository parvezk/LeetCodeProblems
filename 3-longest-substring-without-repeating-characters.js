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
  let HashMap = new Map();
  HashMap.set(0, 1);

  let counter = 0,
    ans = 0,
    begin = 0,
    end = 0;

  while (end < s.length) {
    let c = s.charAt(end);

    if (HashMap.has(c)) HashMap.set(c, HashMap.get(c) + 1);
    else HashMap.set(c, 1);

    if (HashMap.get(c) > 1) counter++;
    end++;

    while (counter > 0) {
      let tempChar = s.charAt(begin);
      if (HashMap.get(tempChar) > 1) counter--;
      HashMap.set(tempChar, HashMap.get(tempChar) - 1);
      begin++;
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
