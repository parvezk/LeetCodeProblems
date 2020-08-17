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
 * @param {number} key
 * @return {TreeNode}
 */
class BST {
  constructor() {}
  
  Delete(root, val) {
    if (root == null) return null;
    
    if (val < root.val)
      root.left = this.Delete(root.left, val);
    else if (val > root.val)
      root.right = this.Delete(root.right, val);
    else
      root = this.DeleteNode(root, val);
    
    return root;
  }
  
  DeleteNode(root, val) {
    //Case 1: No Children
    if (root.left == null && root.right == null)
      root = null;
    //Case 1: One Child Only
    else if (root.left == null)
      root = root.right;
    else if (root.right == null)
      root = root.left;
    else {
      //Case 3: Two children
      const predVal = this.GetPredecessor(root.left, val);
      if (predVal) root.val = predVal;
      root.left = this.Delete(root.left, predVal);
    }
    return root;
  }
  
  GetPredecessor(node, val) {
    while (node.right)
      node = node.right
    return node.val;
  }
}


var deleteNode = function(root, key) {
  return new BST().Delete(root, key);
};