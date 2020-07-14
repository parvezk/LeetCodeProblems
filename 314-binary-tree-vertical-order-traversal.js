/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = root => {
    let output = [];
    if (root == null) return output;
    
    let columnTable = new Map(),
        queue = [[root, 0]];
    
    while (queue.length) {
      let p = queue.shift(),
          node = p[0], column = p[1];
  
      if (node != null) {
        if (columnTable.has(column))
          columnTable.get(column).push(node.val);
        else
          columnTable.set(column, [node.val]);
      
        if (node.left) queue.push([node.left, column - 1]);
        if (node.right) queue.push([node.right, column + 1]);
      }
      
    }
    // Sort by column-keys
    let sortedKeys = [...columnTable.keys()].sort((a, b) => a - b);
    for (let k of sortedKeys) output.push(columnTable.get(k))
    return output;
  }