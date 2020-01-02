/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// Approach 2
var flatten = function(root) {
  if (!root) return;

  const { left, right } = root;
  flatten(left);
  flatten(right);

  if (left) {
    root.left = null;
    InsertAfter(left, root);
  }
};

const InsertAfter = (source, target) => {
  const { right } = target;
  const tail = findTail(source);

  target.right = source;
  tail.right = right;
};

const findTail = node => {
  while (node.right) node = node.right;
  return node;
};

// TODO
// Approach 1
/* let prev = null;
  var flatten = function(root) {
    if (root == null) return null;
    
    flatten(root.right)
    flatten(root.left)
    
    root.right = prev;
    root.left = null;
    prev = root;
  }; */
