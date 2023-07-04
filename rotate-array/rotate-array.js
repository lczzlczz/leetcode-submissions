/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const rotateTimes = k % nums.length;

  let res = [];
  for (let i = nums.length - rotateTimes; i < nums.length; i++) {
    res.push(nums[i]);
  }

  for (let i = 0; i < nums.length - rotateTimes; i++) {
    res.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
};