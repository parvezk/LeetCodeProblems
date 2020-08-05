/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  
  const helper = (inStart, inEnd) => {
    // Base case 1
    if (inStart > inEnd) return null;
    const newNode = new TreeNode(postorder.pop());
    // Base case 2
    if (inStart == inEnd) return newNode;
    
    // Recursive case
    //get index of current node in inorder traversal;
    const index = inorder.indexOf(newNode.val);
    // Recurse post-order: construct right subtree, then construct left subtree
    newNode.right = helper(index + 1, inEnd);
    newNode.left = helper(inStart, index - 1);
    
    return newNode;
  }
  
  return helper(0, inorder.length - 1);
};