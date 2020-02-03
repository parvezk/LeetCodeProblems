/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
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
    
    //console.log(dp)
    return dp[n - 1][total] == Number.MAX_VALUE ? -1 : dp[n - 1][total];
  };