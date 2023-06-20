/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let seq = [];
  for (let i = 0; i < arr.length; i++) {
    seq.push(fn(arr[i], i));
  }
  return seq;
};