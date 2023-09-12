/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   // find the first element that >= target 
   // lower bound
   // nums[mid] >= target
   let [left, right] = [0, nums.length];

   while (left !== right) {
     const mid = Math.floor((left + right) / 2);

     if (nums[mid] >= target) {
       right = mid;
     } else {
       left = mid + 1;
     }
   }

   return right;
};