/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
  
    if (root == null) return false;
    
    const PreOrder = (root, total = 0, bool = false) => {
      if (root != null) {
        total += root.val;
        
        bool = PreOrder(root.left, total, bool);
        bool = PreOrder(root.right, total, bool);
        
        if (root.left != null && root.right != null)
          if (total == sum) bool = true;
      }
      return bool;
    }
    
    return PreOrder(root);
  };
  
  var hasPathSum = (root, sum) => {
      if (root == null) return false;
  
      sum -= root.val;
      if (root.left == null && root.right == null)
          return (sum == 0)
      else
          return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
  }