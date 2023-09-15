function searchRange(nums: number[], target: number): number[] {
  // the first one >= target
  // [5, 7, 7, 8, 8, 10], target = 8;
  // binary search from 0 to 5, find the first one >= target, the position is 3
  // binary search from 3 to 5, find the last one <= target

  let [left, right] = [0, nums.length];
  const result = [];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  result.push(right);
  
  [left, right] = [-1, nums.length - 1];

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);

    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  result.push(right);

  return result[0] > result[1]? [-1, -1]: result;
};