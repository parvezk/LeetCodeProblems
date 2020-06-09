/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = [];
  const backtrack = (curr, open, close) => {
    if (curr.length == n * 2) ans.push(curr);
    if (open < n) backtrack(curr + '(', open + 1, close);
    if (close < open) backtrack(curr + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return ans;
};