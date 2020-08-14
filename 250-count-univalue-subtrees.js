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
// Approach 1: Depth First Search
var countUnivalSubtrees = function(root) {
  if (root == null) return 0;
  
  let count = 0;
  
  const UniVal = root => {
      
      // BASE CASE
      if (!root.left && !root.right) {
          count++;
          return true;
      }
      let is_unival = true;
      // RECURSIVE ROUTINE
      if (root.left)
          is_unival = UniVal(root.left) && is_unival && root.left.val == root.val;
      
      if (root.right)
          is_unival = UniVal(root.right) && is_unival && root.right.val == root.val;
      
      if (!is_unival) return false;
      count++;
      return true;
  }   
  
  UniVal(root);
  return count
};

// Approach 2: Depth First Search - Pass Parent Values
var countUnivalSubtrees = function(root) {
let count = 0;

const is_valid_part = (node, val) => {
  if (node == null) return true;
  
  if (!is_valid_part(node.left, node.val) | !is_valid_part(node.right, node.val))
    return false;
  
  count++;
  return node.val == val;
}

is_valid_part(root, 0);
return count;
}
