/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

class BSTIterator {
    
    constructor(root) {
        this.arr = [];
        this.inorder(root);
    }
    
    inorder(root) {
        if (root != null) {
            this.inorder(root.left);
            this.arr.push(root.val)
            this.inorder(root.right);
        }
    }

    next(){
        return this.arr.shift();
    }
    
    hasNext(){
        return this.arr.length !== 0
    }
}

class BSTIterator {
    
    constructor(root) {
      this.nodesSorted = [];
      this.index = -1;
      this.inorder(root);
    }
    
    inorder(root) {
        if (root != null) {
            this.inorder(root.left);
            this.nodesSorted.push(root.val)
            this.inorder(root.right);
        }
    }

    next(){
        return this.nodesSorted[++this.index];
    }
    
    hasNext(){
        return this.index + 1 < this.nodesSorted.length;
    }
}