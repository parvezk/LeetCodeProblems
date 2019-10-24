/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class BST {
  constructor() {}
  // Recursively obtain the height of a tree. An empty tree has -1 height
  Height = node => {
    if (node == null) return -1;
    else return 1 + Math.max(this.Height(node.left), this.Height(node.right));
  };

  isBalanced = root => {
    // An empty tree satisfies the definition of a balanced tree
    if (root == null) return true;
    // balanceFactor
    // Check if subtrees have height within 1. If they do, check if the
    // subtrees are balanced
    return (
      Math.abs(this.Height(root.left) - this.Height(root.right)) < 2 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  };
}

var isBalanced = function(root) {
  const bst = new BST();
  return bst.isBalanced(root);
};

/*
[1,2,2,3,3,null,null,4,4]
[3,9,20,null,null,15,7]
[]
[1,2,2,3,null,null,3,4,null,null,4]
*/
