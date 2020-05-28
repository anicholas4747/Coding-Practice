/*
104. Maximum Depth of Binary Tree
Easy

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.


 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return dfs(root, 1);

  function dfs(root, currDepth) {
    if (!root) return 0;

    let leftRes = (root.left) ? dfs(root.left, currDepth + 1) : 0;
    let rightRes = (root.right) ? dfs(root.right, currDepth + 1) : 0;

    if (!leftRes && !rightRes) {
      return currDepth;
    } else {
      return Math.max(leftRes, rightRes);
    }
  }
};