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
var sumNumbers = function(root) {
  const res = [];

  const dfs = (node, sum) => {
    if (!node) return;
    
    sum = sum * 10 + node.val;

    if (!node.left && !node.right) {
      res.push(sum);
    }

    dfs(node.left, sum);
    dfs(node.right, sum);
  }

  dfs(root, 0);

  return res.reduce((acc, cur) => acc + cur, 0);
};