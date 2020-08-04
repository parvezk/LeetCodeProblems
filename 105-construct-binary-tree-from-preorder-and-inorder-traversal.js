/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    const helper = (inStart, inEnd) => {
      // Base case 1
      if (inStart > inEnd) return null;

      let newNode = new TreeNode(preorder.shift());
      // Base case 2
      if (inStart == inEnd) return newNode;
      
      // Recursive case
      //get index of current node in inorder traversal;
      const index = inorder.findIndex(n => n == newNode.val);
      // Recurse pre-order: construct left subtree, then construct right subtree
      newNode.left = helper(inStart, index - 1);
      newNode.right = helper(index + 1, inEnd);
      
      return newNode;
    }
    
    return helper(0, inorder.length - 1);
  };