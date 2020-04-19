/*
  Given a root tree node, find the number of universal value trees
  Terminal node count as universal value trees
  Nodes where all subsequent nodes have the same value
 */

class TreeNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function univalTree (root) {
  if (!root) return 0;

  let result = univalTree(root.left) + univalTree(root.right);
  if (isUnival(root)) result++;
  return result;

  function isUnival(root) {
    if (!root) return true;
    if (root.left && root.left.val !== root.val) return false;
    if (root.right && root.right.val !== root.val) return false;
    if (isUnival(root.left) && isUnival(root.right)) return true;
    return false;
  }
}

//     0
//   /   \
//  1     0
//      /   \
//     1     0
//   /   \
//  1     1
// => 5 unival trees