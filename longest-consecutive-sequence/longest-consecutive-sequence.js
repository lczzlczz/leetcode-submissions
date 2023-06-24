/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length <= 1) return nums.length;
  nums = Array.from(new Set(nums))
  nums.sort((a, b) => a - b);
  let count = 1;
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) count++;
    else {
      max = Math.max(count, max);
      count = 1;
    }
  }
  max = Math.max(count, max);
  return max;
};