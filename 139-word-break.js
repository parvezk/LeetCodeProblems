// Using Recursion with Memoization
const word_Break = (s, wordDictSet, start, memo) => {
  if (start == s.length) return true;
  if (memo[start] != null) return memo[start];

  for (let end = start + 1; end <= s.length; end++) {
    if (
      wordDictSet.has(s.substring(start, end)) &&
      word_Break(s, wordDictSet, end, memo)
    )
      return (memo[start] = true);
  }
  return (memo[start] = false);
};

var wordBreak = function(s, wordDict) {
  return word_Break(s, new Set(wordDict), 0, new Array(s.length).fill(null));
};

// Using Dynamic Programming
var wordBreak = function(s, wordDict) {
  const n = s.length,
    wordDictSet = new Set(wordDict),
    dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
