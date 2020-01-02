/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
// Using Recursion
class BST {
  constructor() {}

  Delete(root, val) {
    if (root == null) return null;
    if (val < root.val) root.left = this.Delete(root.left, val);
    else if (val > root.val) root.right = this.Delete(root.right, val);
    else root = this.DeleteNode(root, val);

    return root;
  }

  DeleteNode(root, val) {
    if (root.left == null && root.right == null) root = null;
    //Case 1: One Child Only
    else if (root.left == null) {
      root = root.right;
    } else if (root.right == null) {
      root = root.left;
    }
    // Case 2. Two Childs
    else {
      const predVal = this.GetPredecessor(root.left, val);
      if (predVal) root.val = predVal;
      root.left = this.Delete(root.left, predVal);
    }
    return root;
  }

  GetPredecessor(node) {
    let data;
    while (node != null) {
      data = node.val;
      node = node.right;
    }
    return data;
  }
}

var deleteNode = function(root, key) {
  let head = new TreeNode(-1);
  head.right = root;
  const bst = new BST();
  head.right = bst.Delete(root, key);
  return head.right;
};
/*
[5,3,6,2,4,null,7]
3
[5,3,6,2,4,null,7]
0
*/

// TODO
// Using Recursion (More Elegant)
/* 
class Solution {
  //One step right and then always left
  public int successor(TreeNode root) {
    root = root.right;
    while (root.left != null) root = root.left;
    return root.val;
  }

  //One step left and then always right
  public int predecessor(TreeNode root) {
    root = root.left;
    while (root.right != null) root = root.right;
    return root.val;
  }

  public TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) return null;

    // delete from the right subtree
    if (key > root.val) root.right = deleteNode(root.right, key);
    // delete from the left subtree
    else if (key < root.val) root.left = deleteNode(root.left, key);
    // delete the current node
    else {
      // the node is a leaf
      if (root.left == null && root.right == null) root = null;
      // the node is not a leaf and has a right child
      else if (root.right != null) {
        root.val = successor(root);
        root.right = deleteNode(root.right, root.val);
      }
      // the node is not a leaf, has no right child, and has a left child    
      else {
        root.val = predecessor(root);
        root.left = deleteNode(root.left, root.val);
      }
    }
    return root;
  }
}*/
