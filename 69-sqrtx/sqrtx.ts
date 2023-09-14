function mySqrt(x: number): number {
  let [left, right] = [0, x];
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      left = mid + 1;
      ans = Math.max(ans, mid);
    } else {
      right = mid - 1;
    }
  }

  return ans;
};
