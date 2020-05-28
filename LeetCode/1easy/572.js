/*
572. Subtree of Another Tree
Easy

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.


Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.



 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
// traverse the node in s 
// once we found the node in s equals to the root in t
// dfs to check whether it is the same or not

var isSubtree = function (s, t) {
  let matchingNodes = [];
  match(s, t)
  for (let i = 0; i < matchingNodes.length; i++) {
    if (compare(matchingNodes[i], t)) return true;
  }
  return false;

  function match(s, t) {
    if (s === null) return s;
    if (s.val === t.val) {
      matchingNodes.push(s);
    };
    match(s.left, t);
    match(s.right, t);
  }
  function compare(s, t) {
    if (s === null && t === null) return true;
    if (s === null || t === null || s.val !== t.val) return false;
    return compare(s.left, t.left) && compare(s.right, t.right);
  }
};