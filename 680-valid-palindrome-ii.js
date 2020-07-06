/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeRange = (s, i, j) => {
  for (let k = i; k <= i + (j - i) / 2; k++) {
    if (s.charAt(k) != s.charAt(j - k + i)) return false;
  }
  return true;
}

var validPalindrome = function(s) {
  for (let i = 0; i < Math.trunc(s.length / 2); i++) {
    if (s.charAt(i) != s.charAt(s.length - 1 - i)) {
      let j = s.length - 1 - i;
      return (isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1));
    }
  }
  return true;
};