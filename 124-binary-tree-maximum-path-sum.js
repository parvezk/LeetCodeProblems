/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function(root) {
  
    let max_sum = -Infinity;
    
    const max_gain = (node) => {
      if (node == null) return 0;
      
      let left_gain = 0, right_gain = 0;
      
      if (node.left) left_gain = Math.max(max_gain(node.left) , 0);
      if (node.right) right_gain = Math.max(max_gain(node.right), 0);
      
      let price_newpath = node.val + left_gain + right_gain;
      
      if (price_newpath > max_sum) max_sum = price_newpath;
      
      return node.val + Math.max(left_gain, right_gain);
    }
  
    max_gain(root);
    return max_sum
      
  };