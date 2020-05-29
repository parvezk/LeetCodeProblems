/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// DP / Recursion
var generateTrees = function(n) {
  
    const generate_trees = (start, end) => {
      let all_trees = [];
      
      if (start > end) {
        all_trees.push(null)
        return all_trees;
      }
      
      // pick up a root
      for (let i = start; i <= end; i++) {
      // all possible left subtrees if i is choosen to be a root
      let left_trees = generate_trees(start, i-1);
      // all possible right subtrees if i is choosen to be a root
      let right_trees = generate_trees(i+1, end);
      
      // connect left and right trees to the root i
      for (l of left_trees) {
        for (r of right_trees) {
          let current_tree = new TreeNode(i);
          current_tree.left = l;
          current_tree.right = r;
          all_trees.push(current_tree);
        }
      }
      }
      return all_trees;
    }
      if (n == 0)
        return [];
    
    return generate_trees(1, n)
  };