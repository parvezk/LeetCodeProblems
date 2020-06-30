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
 * @return {string[]}
 */

var preOrder = (root, path, stack) => {
    if (root == null) return stack;
    
    path += root.val;
    
    if (root.left || root.right)
      path += '->';
    
    preOrder(root.left, path, stack);
    preOrder(root.right, path, stack);
    
    if (!root.left && !root.right)
      stack.push(path);
    
    return stack
  }
  
  var binaryTreePaths = function(root) {
    
    var res = preOrder(root, '', []);
    return res;
  };