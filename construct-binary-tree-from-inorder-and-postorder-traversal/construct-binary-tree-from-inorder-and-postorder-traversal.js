/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};


const build = (inorder, l1, r1, postorder, l2, r2) => {
  if (l2 > r2) return null;

  const top = new TreeNode(postorder[r2]);
  let mid = l1;

  while (top.val !== inorder[mid]) mid++;
  
  const steps = mid - l1;

  top.left = build(inorder, l1, mid - 1, postorder, l2, l2 + steps - 1);
  top.right = build(inorder, mid + 1, r1, postorder, l2 + steps, r2 - 1);

  return top;
}