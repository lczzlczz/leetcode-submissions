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
var averageOfLevels = function(root) {
  const bfs = root => {
    if (root === null) return [];

    const res = [];
    const queue = [root];

    while (queue.length > 0) {
      const n = queue.length;
      let sum = 0;

      for (let i = 0; i < n; i++) {
        const node = queue.pop();
        sum += node.val;

        node.left && queue.unshift(node.left);
        node.right && queue.unshift(node.right);
      }

      res.push(sum / n);
    }
    return res;
  }

  return bfs(root);
}
