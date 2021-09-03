/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let cursor = 1;
  let profit = 0;
  let diff = 0;
  while(cursor < prices.length) {
    diff = prices[cursor] - prices[cursor - 1];
    profit = (diff > 0) ? profit + diff : profit;
    cursor++;
  }
  return profit;
};
// [7,1,5,3,6,4] -> 7
module.export = { maxProfit };
