/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const find = (l, r) => {
    if (l > r) return null;

    const mid = l + r >> 1;
    const root = new TreeNode(nums[mid], 
    find(l, mid - 1),
    find(mid + 1, r));

    return root;
  }

  return find(0, nums.length - 1);
};