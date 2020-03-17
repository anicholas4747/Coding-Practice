
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function (t1, t2) {
  if (!t2) return t1;
  if (!t1) return t2;
  if (!t1.val && !t2.val) return null;

  let newVal = null;
  if (t1.val) newVal = t1.val;
  if (t2.val) newVal += t2.val;
  let newTree = new TreeNode(newVal);

  newTree.left = mergeTrees(t1.left, t2.left);
  newTree.right = mergeTrees(t1.right, t2.right);

  return newTree;
};

let a = new TreeNode(1);
let b = new TreeNode(3);
let c = new TreeNode(2);
let d = new TreeNode(5);
b.left = d;
a.left = b;
a.right = c;

let ae = new TreeNode(2);
let be = new TreeNode(1);
let ce = new TreeNode(3);
let de = new TreeNode(4);
let ee = new TreeNode(7);
be.right = de;
ce.right = ee;
ae.left = be;
ae.right = ce;

console.log(mergeTrees(a,ae));
