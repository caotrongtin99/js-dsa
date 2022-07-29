/**
 * URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let minValue = Number.MAX_SAFE_INTEGER
  let maxProfit = -Number.MAX_SAFE_INTEGER
  
  for (let i = 0; i < prices.length; i++) {
      minValue = prices[i] < minValue ? prices[i] : minValue
      maxProfit = prices[i] - minValue > maxProfit ? prices[i] - minValue : maxProfit
  }
  
  return maxProfit
};