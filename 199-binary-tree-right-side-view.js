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

// Using DFS
var rightSideView = function(root) {
  const res = [];

  const DFS = (node, depth) => {
    if (!node) return;
    if (depth == res.length) res.push(node.val);
    DFS(node.right, depth + 1);
    DFS(node.left, depth + 1);
  };

  DFS(root, 0);
  return res;
};

// Using BFS
var rightSideView = function(root) {
  const res = [];
  if (root == null) return res;

  const q = [root];
  while (q.length) {
    let n = q.length;
    for (let i = 0; i < n; i++) {
      let p = q.shift();
      if (p.left) q.push(p.left);
      if (p.right) q.push(p.right);
      if (i == n - 1) res.push(p.val);
    }
  }
  return res;
};

// OTHER *****************************************

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
