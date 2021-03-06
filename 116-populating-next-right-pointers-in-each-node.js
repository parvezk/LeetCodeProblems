/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) return null;
  
  const levels = [];
  
  const levelOrder = (node, level) => {
    if (levels.length == level)
      levels.push([node]);
    else
      levels[level].push(node)
      
      if (node.left) levelOrder(node.left, level + 1);
      if (node.right) levelOrder(node.right, level + 1);
  }
  
  levelOrder(root, 0);
  
  for (let level of levels) {
    if (level.length == 1) continue;
    
    for (let i = 0; i < level.length - 1; i++)
        level[i].next = level[i + 1]
  }
  
  return levels[0][0];
};