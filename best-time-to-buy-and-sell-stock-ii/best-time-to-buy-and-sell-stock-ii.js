/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let buyingPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] > prices[i]) {
      maxProfit += prices[i - 1] - buyingPrice;
      buyingPrice = prices[i];
    }
  }

  maxProfit += prices[prices.length - 1] - buyingPrice;

  return maxProfit;
};
