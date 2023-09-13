/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let [left, right] = [0, n];

  while (left < right) {
    const number = Math.floor((left + right) / 2);

    if (guess(number) === 0) return number;

    if (guess(number) === - 1) {
      right = number;
    } else {
      left = number + 1;
    }
  }

  return left;
};