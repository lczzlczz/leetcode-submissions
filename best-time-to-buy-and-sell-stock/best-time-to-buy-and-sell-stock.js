/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let prefixMin = new Array(prices.length);
  prefixMin[0] = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    prefixMin[i] = Math.min(prefixMin[i - 1], prices[i]);
  }

  let maxProfit = 0;
  for (let i = prices.length - 1; i > 0; i--) {
    maxProfit = Math.max(maxProfit, prices[i] - prefixMin[i - 1]);
  }

  return maxProfit;
};