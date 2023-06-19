/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let [i, j, p] = [m - 1, n - 1, m + n - 1];
  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[p--] = nums1[i--];
    } else {
      nums1[p--] = nums2[j--];
    }
  }
};