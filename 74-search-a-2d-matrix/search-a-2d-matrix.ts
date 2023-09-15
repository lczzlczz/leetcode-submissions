function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let result = matrix[0][0];

  let [left, right] = [0, m * n - 1];
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    const [i, j] = [Math.floor(mid / n), mid % n];
    if (matrix[i][j] <= target) {
      left = mid;
      result = matrix[i][j];
    } else {
      right = mid - 1;
    }
  }

  return result === target? true: false;
};