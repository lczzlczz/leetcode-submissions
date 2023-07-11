/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  let res = 0;
  let sign = 1;

  while (n > 0) {
    res += sign * n % 10;
    sign = -sign;
    n = Math.trunc(n / 10);
  }

  sign = -sign; 

  return sign * res;
};