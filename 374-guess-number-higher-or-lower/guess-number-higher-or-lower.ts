/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let [left, right] = [-1, n];

  while (left < right) {
    const number = Math.floor((left + right + 1) / 2);

    const guessNumber = guess(number);
    if (guessNumber === 0 || guessNumber === 1) {
      left = number;
    } else {
      right = number - 1;
    }
  }

  return left;
};