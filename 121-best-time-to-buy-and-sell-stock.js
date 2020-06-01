/**
 * @param {number[]} prices
 * @return {number}
 */
// DP tagged?
var maxProfit = function(prices) {
    
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let price of prices) {
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
    return maxProfit;
  };