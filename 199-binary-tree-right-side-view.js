/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// DFS APPROACH
var rightSideView = function(root) {
  const rightMostValueAtDepth = new Map(),
    /* These two stacks are always synchronized, providing an implicit
     * association values with the same offset on each stack. */
    nodeStack = [],
    depthStack = [];
  // let max_depth = -1;

  const stackUpdate = (v, d) => {
    nodeStack.push(v);
    depthStack.push(d);
  };
  stackUpdate(root, 0);

  while (nodeStack.length) {
    // Pre-Order
    let node = nodeStack.pop(),
      depth = depthStack.pop();
    /* The first node that we encounter at a particular depth contains
     * the correct value. */
    if (node != null) {
      if (!rightMostValueAtDepth.has(depth))
        rightMostValueAtDepth.set(depth, node.val);

      stackUpdate(node.left, depth + 1);
      stackUpdate(node.right, depth + 1);
    }
  }
  /* Construct the solution based on the values that we end up with at the
   * end. */
  return [...rightMostValueAtDepth.values()];
};

// BFS Approach
