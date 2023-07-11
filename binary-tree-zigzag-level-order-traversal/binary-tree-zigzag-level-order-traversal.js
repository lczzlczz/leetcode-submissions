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
var zigzagLevelOrder = function(root) {
  if (root === null) return [];

  let res = [];
  let queue = [root];
  let levelCount = 1;

  while (queue.length > 0) {
    const n = queue.length;
    let level = [];

    for (let i = 0; i < n; i++) {
      const node = queue.pop();
      level.push(node.val);

      node.left && queue.unshift(node.left);
      node.right && queue.unshift(node.right);
    }

    if (levelCount++ % 2 === 0) level.reverse();

    res.push(level);
  }

  return res;
};