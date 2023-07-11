/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Infinity;
  let res = [];

  const dfs = node => {
    if (node === null) return;

    dfs(node.left);
    res.push(node.val); 
    dfs(node.right);
  }

  dfs(root);

  for (let i = 0; i < res.length - 1; i++) {
    min = Math.min(min, res[i + 1] - res[i]);
  }

  return min;
};