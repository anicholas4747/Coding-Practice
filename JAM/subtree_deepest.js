/*
Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.
A node is deepest if it has the largest depth possible among any node in the entire tree.
The subtree of a node is that node, plus the set of all descendants of that node.
Return the node with the largest depth such that it contains all the deepest nodes in its subtree.

Example 1:
Input: [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
*/

var subtreeWithAllDeepest = function (root) {
  // outer: create a depth counter that increments when root.left or root.right
  // outer: create deepest node variable (leaf)
  // outer: create deepest node parent

  // nested func: traverse tree DFS. previous stackframe for parent checks left and right. When no descendant, change a bool. When both sides are checked, depth counter is new greatest and one of children is deepest node, reassign pointer to parent

  let maxDepth = 0;
  let deepestLeaf = null;
  let deepestParent = root;

  traverse(root, 1);
  return deepestParent;

  function traverse(root, depth) {
    if (!root) return false;

    let leftResult = (!root.left) ? false : traverse(root.left, depth + 1);
    let rightResult = (!root.right) ? false : traverse(root.right, depth + 1);

    if (!leftResult && !rightResult && maxDepth < depth) {
      maxDepth = depth;
      deepestLeaf = root;
      return true;
    } else if ((depth + 1 === maxDepth) &&
      (root.left === deepestLeaf || root.right === deepestLeaf)) {
      deepestParent = root;
    }
  }
};