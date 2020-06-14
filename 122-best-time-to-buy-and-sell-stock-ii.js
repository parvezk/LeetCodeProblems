/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = prices[0], profit = 0;
    
    for (let price of prices) {
      minPrice = Math.min(minPrice, price);
      if (price - minPrice > 0) {
        profit += price - minPrice;
        minPrice = price;
      }
    }
    return profit
  };