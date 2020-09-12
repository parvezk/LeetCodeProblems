/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  
  const isPalindromeRange = (s, i, j) => {
    for (let k = i; k <= i + (j - i) / 2; k++) {
      if (s.charAt(k) != s.charAt(j - k + i))
        return false;
    }
    return true;
  }
  
  const mid = Math.trunc(s.length / 2)
  for (let i = 0; i < mid; i++) {
    let j = s.length - 1 - i;
    
    if (s.charAt(i) != s.charAt(j))
      return isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1);
  }
  return true;
};