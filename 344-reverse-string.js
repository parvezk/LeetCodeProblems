/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
  return s.reverse();
}

// Using Recursion
var reverseString = function(s) {
  if (s.length == 1) return s;
  const reverse = (s, start, end) => {
    if (start >= end)
      return;
    else {
      const tmp = s[start];
      s[start] = s[end];
      s[end] = tmp;
      
      reverse(s, start + 1, end - 1);
    }
  }
  
  return reverse(s, 0, s.length - 1);
};

var reverseString = function(s, start = 0, end = s.length - 1) {
  if (s.length <= 1) return s;

  // Use divide and conquer with recursion to solve this
  // Use tail recursion optimization
  // Base case: can be solved without recursion
  if (start >= end) return;
  else {
    // Remember: Dividing into [different] problems (not self-similar sub problems)
    // We solve two components [independently from each other]

    // swap the leading and trailing characters
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    // Solve by recursing on remaining substrings
    // Thus reducing the problem SIZE to base size
    reverseString(s, start + 1, end - 1);
  }
}