/**
 * @param {string} s
 * @return {number}
 */

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
