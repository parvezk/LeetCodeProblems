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
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    
    const depth = node => {
      if (!node) return 0;
      const L = depth(node.left),
            R = depth(node.right)
      ans = Math.max(ans, L + R);
      return Math.max(L, R) + 1;
    }
    
    depth(root);
    return ans;
  };