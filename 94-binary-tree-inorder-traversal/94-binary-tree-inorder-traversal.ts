/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  
  let seq = [];
  let stack = [root];
  let visited = new Set;
  
  while(stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) {
      seq.push(node.val);
    } else {
      visited.add(node);
      node.right && stack.push(node.right);
      stack.push(node); 
      node.left && stack.push(node.left);
    }
  }
  
  return seq;
};