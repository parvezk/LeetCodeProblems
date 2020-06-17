/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Approach 2: Dynamic programming - Bottom up
var coinChange = function(coins, amount) {
  let max = amount + 1,
      dp = new Array(max).fill(max);
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  
  return dp[amount] > amount ? -1 : dp[amount];
};

// Approach 1: Dynamic programming - Top down
var coinChange = function(denominations, total) {
  const n = denominations.length;
  const dp = new Array(n).fill(null).map(() => new Array(total + 1).fill(Number.MAX_VALUE));
  
  for (let i = 0; i < n; i++)
    dp[i][0] = 0;
  
  for (let i=0; i < n; i++) {
      for(let t=1; t <= total; t++) {
        if(i > 0)
          dp[i][t] = dp[i-1][t]; //exclude the coin
        if(t >= denominations[i]) {
          if(dp[i][t-denominations[i]] != Number.MAX_VALUE)
            dp[i][t] = Math.min(dp[i][t], dp[i][t-denominations[i]]+1); // include the coin
        }
      }
    }
  

  return dp[n - 1][total] == Number.MAX_VALUE ? -1 : dp[n - 1][total];
};