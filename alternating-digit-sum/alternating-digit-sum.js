/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  let res = 0;
  let sign = -1;

  while (n > 0) {
    sign = -sign;
    res += sign * n % 10;
    n = Math.trunc(n / 10);
  }

  return sign * res;
};