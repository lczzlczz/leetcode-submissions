/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   let seq = [];
   for (let i = 0; i < arr.length; i++) {
     if (fn(arr[i], i)) seq.push(arr[i]);
   } 
   return seq;
};