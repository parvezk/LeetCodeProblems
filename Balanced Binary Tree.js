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

  Height = node => {
    if (node == null) return 0;
    else {
      let heightLeft = this.Height(node.left);
      let heightRight = this.Height(node.right);
      if (heightLeft > heightRight) return heightLeft + 1;
      else return heightRight + 1;
    }
  };

  Difference = node => {
    return Math.abs(this.Height(node.left) - this.Height(node.right));
  };

  isBalanced = root => {
    if (root == null) return true;
    // balanceFactor

    if (root.left != null && this.Difference(root.left) > 1) return false;
    if (root.right != null && this.Difference(root.right) > 1) return false;

    if (!this.isBalanced(root.left) || !this.isBalanced(root.right))
      return false;

    if (this.Difference(root) > 1) return false;

    return true;
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
