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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];

  let queue = [root];
  let res = [];

  while (queue.length > 0) {
    let level = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.pop();
      level.push(node.val);

      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
    }

    res.push(level);
  }

  return res;
};