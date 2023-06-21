/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    max = Math.max(max, getArea(i, j, height));
    if (height[i] < height[j]) i++;
    else j--;
  }
  return max;
};

const getArea = (left, right, arr) => {
  const height = Math.min(arr[left], arr[right]);
  const width = right - left;
  return width * height;
}