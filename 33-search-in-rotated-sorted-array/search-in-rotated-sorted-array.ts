function search(nums: number[], target: number): number {
  const last = nums.length - 1;
  let [left, right] = [0, last + 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= nums[last]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (target > nums[last]) {
    [left, right] = [0, right];
  } else {
    [left, right] = [right, last];
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};