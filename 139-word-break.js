/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Using Dynamic Programming
var wordBreak = function(s, wordDict) {
  const wordDictSet = new Set(wordDict),
    dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

// Using Recursion with Memoization
var word_Break = (s, dictSet, start, memo) => {
  if (start == s.length) return true;
  if (memo[start] != null) return memo[start];

  for (let end = start + 1; end <= s.length; end++) {
    if (
      dictSet.has(s.substring(start, end)) &&
      word_Break(s, dictSet, end, memo)
    )
      return (memo[start] = true);
  }
  return (memo[start] = false);
};

var wordBreak = function(s, wordDict) {
  return word_Break(s, new Set(wordDict), 0, new Array(s.length).fill(null));
};
