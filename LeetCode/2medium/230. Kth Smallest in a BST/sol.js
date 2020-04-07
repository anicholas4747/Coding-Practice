// Kth Smallest Element in a BST

var kthSmallest = function (root, k) {
  function dfs(root) {
    if (root === null) return;
    let sorted = [];
    console.log(sorted)
    if (root.left) {
      sorted.push(...dfs(root.left))
    };
    sorted.push(root.val);
    if (root.right) {
      sorted.push(...dfs(root.right));
    }
    return sorted;
  }
  return dfs(root)[k - 1];
};