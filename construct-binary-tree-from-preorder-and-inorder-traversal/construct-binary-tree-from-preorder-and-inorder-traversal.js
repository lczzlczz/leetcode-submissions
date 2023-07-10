/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

const build = (preorder, l1, r1, inorder, l2, r2) => {
  if (l1 > r1) return null;
  const top = new TreeNode(preorder[l1]);
  let mid = l2;
  while (inorder[mid] !== top.val) mid++;
  const steps = mid - l2;
  

  top.left = build(preorder, l1 + 1, l1 + steps, inorder, l2, mid - 1);
  top.right = build(preorder, l1 + steps + 1, r1, inorder, mid + 1, r2);

  return top;
}