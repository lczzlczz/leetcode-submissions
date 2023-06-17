/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === 0) {
      for (let j = len - 1; j > i; j--) {
        arr[j] = arr[j - 1];
     }
     i++;
    }
  }
};