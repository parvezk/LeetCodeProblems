/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const waysOfDoingNCoins = new Array(amount + 1).fill(0);
   waysOfDoingNCoins[0] = 1;
   
   coins.forEach(coin => {
     for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
       const higherAmountRemainder = higherAmount - coin;
       waysOfDoingNCoins[higherAmount] += waysOfDoingNCoins[higherAmountRemainder];
     }
   });
   //console.log(waysOfDoingNCoins);
   return waysOfDoingNCoins[amount];  
 };