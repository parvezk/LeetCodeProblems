/**
 * @param {number} k
 * @param {number[]} nums
 */

// A utility funtion to create a new BST node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

class KthLargest {
  
  constructor(k, nums) {
    this.root  = null;
    this.k = k;
    this.c = 0;
    this.constructBST(nums);
  }
  
  constructBST(nums) {
    for (let n of nums)
        this.root = this.insert(this.root, n);
  }
  
  insert(root, val) {
    // Base Case
    if (root == null) 
      return new TreeNode(val);
    
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
    this.c = 0;
    let res = this.KthLargest(this.root, this.k, []);
    return res[0]
    
  }
  
  // find the Kth-largest element in a given tree
  KthLargest(node, k, arr) {
    // Base case, second condition important to avoid unnecessary recursive calls
    if (node == null) return;
    
    if (node != null) {
    // Follow reverse in-order traversals
    // so largest element is visited first
    this.KthLargest(node.right, k, arr);
    // Increment count of visited nodes
    this.c++;
    //if c becomes k, this is the Kth largest
    if (this.c == k)
      arr.push(node.val);
      
    // Recurse for the left subtree
    this.KthLargest(node.left, k, arr);
    
    return arr;
    }
  }

};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */