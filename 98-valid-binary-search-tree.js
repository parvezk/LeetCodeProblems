/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Recursive version
var isValidBST = function(root) {
  const helper = (node, lower_limit, upper_limit) => {
    if (node == null) return true;

    if (lower_limit !== null && node.val <= lower_limit) return false;
    if (upper_limit !== null && node.val >= upper_limit) return false;

    if (!helper(node.left, lower_limit, node.val)) return false;
    if (!helper(node.right, node.val, upper_limit)) return false;

    return true;
  };
  return helper(root, null, null);
};

// TODO
// In-order traversal
var isValidBST = function(root) {};

// Iterative version
var isValidBST = function(root) {
  if (root == null) return true;

  let stack = [],
    lowers = [],
    uppers = [];

  const update = (v, lower, upper) => {
    stack.push(v);
    lowers.push(lower);
    uppers.push(upper);
  };

  update(root, null, null);

  while (stack.length) {
    let node = stack.pop(),
      lower_limit = lowers.pop(),
      upper_limit = uppers.pop();

    if (node == null) continue;

    if (lower_limit !== null && node.val <= lower_limit) return false;
    if (upper_limit !== null && node.val >= upper_limit) return false;

    update(node.right, node.val, upper_limit);
    update(node.left, lower_limit, node.val);
  }
  return true;
};
