/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inOrder = (root, stack) => {
    if (root == null) return [];
    
    if (root !== null) {
      inOrder(root.left, stack);
      stack.push(root.val)
      inOrder(root.right, stack);
    }
    return stack;
  }
  
  var inorderTraversal = root => inOrder(root, []);