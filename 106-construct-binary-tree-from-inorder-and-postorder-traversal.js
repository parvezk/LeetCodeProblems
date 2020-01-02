/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// Recursion
const buildTree = (inorder, postorder) => {
  const helper = (in_left, in_right) => {
    // Base case 1
    if (in_left > in_right) return null;

    const newNode = new TreeNode(postorder.pop());
    // Base case 2
    if (in_left == in_right) return newNode;

    // Recursive case
    // Find current node index in inorder traversal
    const index = inorder.indexOf(newNode.val);
    // Recurse in Postorder logic: construct right subtree, then left subtre
    newNode.right = helper(index + 1, in_right);
    newNode.left = helper(in_left, index - 1);

    return newNode;
  };

  return helper(0, inorder.length - 1);
};

// WITH OUT left and right boundary indexes
var buildTree = function(inorder, postorder) {
  const helper = (postOrder, inOrder) => {
    // Base case 1
    if (!postOrder.length) return null;

    const newNode = new TreeNode(postOrder.pop());

    // Base case 2
    if (!postOrder.length) return newNode;

    // Recursive Case 2
    const inIndex = inOrder.indexOf(newNode.val);
    newNode.left = helper(
      postOrder.slice(0, inIndex),
      inOrder.slice(0, inIndex)
    );
    newNode.right = helper(
      postOrder.slice(inIndex),
      inOrder.slice(inIndex + 1)
    );

    return newNode;
  };
  return helper(postorder, inorder);
};
