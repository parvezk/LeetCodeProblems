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
// BOTTOM UP APPROACH / Propagate the answer up
/*
var maxDepth = function(root) {
  if (root == null) return 0;
  
  let height_left = maxDepth(root.left);
  let height_right = maxDepth(root.right);
  return Math.max(height_left, height_right) + 1;
};
*/

// TOP DOWN APPROACH / Determine the parameters to help the node find its answer; use the parameters and node value to determine what values to be passed down to the childrens (to help find their answers themselves)

var maxDepth = function(root) {
  if (root == null) return 0;
  
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
