/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums.length;

  let p = 0;
  let count = 2;
  for (let i = 1; i < nums.length; i++) {
    if (nums[p] !== nums[i]) {
      nums[++p] = nums[i];
      count = 2;
    } else {
      count--;
      if (count > 0) {
        p++;
        if (nums[p] !== nums[i]) nums[p] = nums[i];
      }
    }
  }

  return p + 1;
};