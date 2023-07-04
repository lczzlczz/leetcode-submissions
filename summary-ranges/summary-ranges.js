/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [String(nums[0])];

  let res = [];
  let level = [];
  for (let i = 1; i < nums.length; i++) {
    if (level.length === 0) level = [nums[i - 1], nums[i - 1]];
    if (nums[i] === nums[i - 1] + 1) {
      level.pop();
      level.push(nums[i]);
    } else {
      res.push(level);
      level = [nums[i], nums[i]];
    }
  }

  if (level.length > 0) res.push(level);

  return res.map(([left, right]) => {
    if (left === right) return String(left);
    return String(left) + '->' + String(right);
  })
};