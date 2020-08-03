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
var isSymmetric = function(root) {
    if (root == null) return true;
    
    const symmetric = (root1, root2) => {
      if (root1 == null && root2 == null) return true;
      if (root1 == null || root2 == null) return false;
      
      if (root1.val != root2.val) 
        return false;
      else
        return symmetric(root1.left, root2.right) && symmetric(root1.right, root2.left);
    }
    
    return symmetric(root.left, root.right)
  };

//Slight variation
var isSymmetric = function(root) {
    if (root == null) return true;
    
    const symmetric = (root1, root2) => {
      if (root1 == null && root2 == null) return true;
      if (root1 == null || root2 == null) return false;
      
      if (root1.val != root2.val) return false;
      if (!symmetric(root1.left, root2.right) || !symmetric(root1.right, root2.left))
        return false;
      
      return true;
    }
    
    return symmetric(root.left, root.right)
  };