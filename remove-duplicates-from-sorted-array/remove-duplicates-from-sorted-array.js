/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let p = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[p] !== nums[i]) {
      nums[++p] = nums[i];
    }
  }

  return p + 1;
};