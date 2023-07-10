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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return [];

  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const n = queue.length;
    let value = null;

    for (let i = 0; i < n; i++) {
      const node = queue.pop();
      if (value === null) value = node.val;
      node.right && queue.unshift(node.right);
      node.left && queue.unshift(node.left);
    }

    res.push(value);
  }

  return res;
};