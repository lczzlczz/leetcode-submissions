/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = count(nums);
  for (const key of map.keys()) {
    if (map.get(key) > nums.length / 2) {
      return key;
    }
  }
};

const count = nums => {
  let res = new Map;
  for (const num of nums) {
    res.set(num, res.has(num) ? res.get(num) + 1: 1);
  }

  return res;
}