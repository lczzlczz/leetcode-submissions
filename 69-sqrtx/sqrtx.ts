function mySqrt(x: number): number {
  let [left, right] = [0, x];

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid >= x) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right * right <= x ? right: left;
};