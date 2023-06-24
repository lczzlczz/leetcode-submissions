/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let queue = [];
  let map = new Map;
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (map.has(key) && queue.includes(key)) {
      return true;
    }
    map.set(key, i);
    queue.push(key);
    while (queue.length > k) queue.shift();
  }
  return false;
};