/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function(root) {
  let max_sum = -Infinity;
  
  const max_gain = node => {
    if (node == null) return 0;
    
    let left_gain = (node.left) ? Math.max(max_gain(node.left), 0) : 0,
        right_gain = (node.right) ? Math.max(max_gain(node.right), 0) : 0;

    max_sum = Math.max(max_sum, left_gain + node.val + right_gain);  
    return node.val + Math.max(left_gain, right_gain);
  }
  
  max_gain(root);
  return max_sum;
};
