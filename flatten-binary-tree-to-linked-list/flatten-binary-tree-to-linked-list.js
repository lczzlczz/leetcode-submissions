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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const res = [];
  const find = node => {
    if (!node) return;

    res.push(node);
    find(node.left);
    find(node.right);
  }

  find(root);
  res.shift();

  res.reduce((acc, cur) => {
    acc.left = null;
    acc.right = cur;
    return cur;
  }, root);
};