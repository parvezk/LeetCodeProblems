/**
 * @param {number} k
 * @param {number[]} nums
 */

// A utility class to create a new BST node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class KthLargest {
  constructor(k, nums) {
    this.root  = null;
    this.k = k;
    this.iter = 0;
    this.constructBST(nums);
  }
  
  constructBST(nums) {
    for (let n of nums) 
      this.root = this.insert(this.root, n);
  }
  
  insert(root, val) {
    // Base Case
    if (root == null)  return new TreeNode(val);
    // Recursive Case
    if (val < root.val) 
      root.left = this.insert(root.left, val);
    else 
      root.right = this.insert(root.right, val);
    return root;
  }
  
  /** 
 * @param {number} val
 * @return {number}
 */
  add(val) {
    this.root = this.insert(this.root, val);
    this.iter = 0;
    return this.KthLargest(this.root, null);
  }
  
  // find the Kth-largest element in a given tree
  KthLargest(node, kth) {
    if (node == null) return kth;
    
    if (node != null) {
      // REVERSE IN-ORDER TRAVERSAL
      // Recurse for the right subtree
      kth = this.KthLargest(node.right, kth);
      this.iter++;
      if (this.iter == this.k) kth = node.val;
      // Recurse for the left subtree
      kth = this.KthLargest(node.left, kth);
      return kth;
    }
  }

};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */