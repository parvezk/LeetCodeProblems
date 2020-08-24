/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    let lowestCommon = null;
    
    const recurseTree = (node = root) => {
      if (node == null) return false;
      
      const left = recurseTree(node.left),
            right = recurseTree(node.right),
            mid = (node == p) || (node == q);
      
      if (left + mid + right >= 2) 
        lowestCommon = node;
      
      return (left + mid + right > 0);
    };
    
    recurseTree();
    return lowestCommon;
  };

  var lowestCommonAncestor = (root, p, q) => {
    let lowestCommon = null;
    
    const recurseTree = node => {
      if (node == null) return false;
          
      const left = recurseTree(node.left) ? 1 : 0;
  
      const right = recurseTree(node.right) ? 1 : 0;
  
      const mid = (node == p) || (node == q) ? 1 : 0;
  
      if (left + mid + right >= 2) 
        lowestCommon = node;
      
      return (left + mid + right > 0);
    }
    
    recurseTree(root, p, q);
    return lowestCommon;
  }
  
