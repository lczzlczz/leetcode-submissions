/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  while (n > 9) {
    let sum = 0;
    while (n > 0) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n === 1 || n === 7? true: false;
};