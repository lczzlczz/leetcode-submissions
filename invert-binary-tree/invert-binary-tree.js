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
 * @return {TreeNode}
 */
var invertTree = function(root) {
   const dfs = node => {
     if (node === null) return;

     const left = invertTree(root.right);
     const right = invertTree(root.left);

     root.left = left;
     root.right = right;
   } 

   dfs(root);

   return root;
};