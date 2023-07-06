/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let window = 0;
  let sum = 0;
  let min = Infinity;

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum < target) {
      window++;
      sum += nums[i];
    }
    while(sum >= target) {
      min = Math.min(min, window);
      sum -= nums[j++];
      window--;
    }
  }

  return min === Infinity? 0: min;
};

// O(n^2);