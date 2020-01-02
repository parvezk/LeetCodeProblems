/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// Recursion and Inorder traversal
var kthSmallest = function(root, k) {
  const stack = [];

  const inorder = node => {
    if (node != null) {
      inorder(node.left);
      stack.push(node.val);
      inorder(node.right);
    }
  };
  inorder(root);
  return stack[k - 1];
};

// Iteration
var kthSmallest = function(root, k) {
  const stack = [];

  while (true) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    k--;
    if (k == 0) return root.val;
    root = root.right;
  }
};
