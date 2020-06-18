/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */


var serialize = function(root) {
  const stack = [];
  const PreOrder = root => {
    if (root != null) {
      stack.push(root.val);
      PreOrder(root.left);
      PreOrder(root.right);
    } else
        stack.push(null);
  }
  
  PreOrder(root)
  return stack;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  
  const node = new TreeNode(data.shift())
  // Base case
  if (node.val == null) return null;
  // Recursive case
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */