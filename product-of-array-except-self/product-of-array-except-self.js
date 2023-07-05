/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;

  const prefixProduct = new Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
  }

  const suffixProduct = new Array(n + 2).fill(1);
  for (let i = n; i >= 1; i--) {
    suffixProduct[i] = suffixProduct[i + 1] * nums[i - 1];
  }

  const answers = new Array(n + 1);
  for (let i = 1; i <= nums.length; i++) {
    answers[i] = prefixProduct[i - 1] * suffixProduct[i + 1];
  }

  answers.shift();
  
  return answers;
};