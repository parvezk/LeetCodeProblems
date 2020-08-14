/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

var closestValue = function(root, target) {

    let val, closest = root.val;
    
    while (root != null) {
      val = root.val;
      console.log(val, Math.abs(val - target), Math.abs(closest - target))
      closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
      root = target < root.val ? root.left : root.right;
    }
    return closest; 
  };
  
  