function findMin(nums: number[]): number {
  const last = nums.length - 1;
  let [left, right] = [0, last];

  while (left < right) {
    const mid = Math.floor((left + right) / 2); 

    if (nums[mid] <= nums[last]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[right];
};