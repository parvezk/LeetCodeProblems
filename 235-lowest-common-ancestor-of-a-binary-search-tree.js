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
  let ans = null;
  
  const recurseTree = (node) => {
      if (node == null) return false;
  
      const left = recurseTree(node.left);
      const right = recurseTree(node.right);
      const mid = (node == p) || (node == q);

      if (left + mid + right >= 2) 
        ans = node;
      return (left + mid + right);
  }
  
  recurseTree(root);
  return ans;
};

var lowestCommonAncestor = function(root, p, q) {
  let ans = null;

  const recurseTree = (node, p, q) => {
    if (node == null) return false;

    const left = recurseTree(node.left, p, q) ? 1 : 0;

    const right = recurseTree(node.right, p, q) ? 1 : 0;

    const mid = node == p || node == q ? 1 : 0;

    if (left + mid + right >= 2) ans = node;

    return left + mid + right;
  };

  recurseTree(root, p, q);
  return ans;
};
