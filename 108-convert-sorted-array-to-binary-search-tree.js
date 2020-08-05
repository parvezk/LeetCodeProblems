/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// AVL Tree
class balancedBST {
    constructor(){
      this.root = null;
    }
    
    Insert = (val, root=this.root) => {
      if (root == null){
          this.root = new TreeNode(val);
          return this.root;
      }
      
      if (val < root.val) {
        root.left = this.Insert(val, root.left); // Insert in left subtree.
        root.left = this.Balance(root.left);
      }
      else {
        root.right = this.Insert(val, root.right); // Insert in right subtree.
        root.right = this.Balance(root.right);
      }
      
      root = this.Balance(root);
      this.root = root;
      return this.root;
      
    }
    
    Height = node => {
      if (node == null)
        return -1;
      else
        return Math.max(this.Height(node.left), this.Height(node.right)) + 1;
    }
    
    Difference = node => {
      return this.Height(node.left) - this.Height(node.right);
    };
  
    Balance = T => {
      const balanceFactor = this.Difference(T);
      if (balanceFactor > 1) {  // check in left sub-tree
        if (this.Difference(T.left) > 1)
          return this.RotateRight(T);
        else
          return this.RotateLeftRight(T);
      }
      else if (balanceFactor < -1) { // check in right sub-tree
        if (this.Difference(T.right) < 0)
          return this.RotateLeft(T);
        else
          return this.RotateRightLeft(T);
      }
      else
        return T;
    }
    
    RotateRight(T)
    // Returns the tree node resulting from a right rotation.
    {
      const S = T.left;
      const B = S.right;
      S.right = T;
      T.left = B;
      return S;
    }
  
    RotateLeft(T)
    // Returns the tree node resulting from a left rotation.
    {
      const S = T.right;
      const B = S.left;
      S.left = T;
      T.right = B;
      return S;
    }
  
    RotateLeftRight(T)
    // Returns the tree node resulting from a left-right rotation.
    {
      const S = T.left;
      T.left = this.RotateLeft(S);
      return this.RotateRight(T);
    }
  
    RotateRightLeft(T)
    // Returns the tree node resulting from a right-left rotation.
    {
      const S = T.right;
      T.right = this.RotateRight(S);
      return this.RotateLeft(T);
    }
  }
  
  var sortedArrayToBST = function(nums) {
    const T = new balancedBST();
    for (n of nums)
      T.Insert(n);
    
    console.log(T.root)
    return T.root
  };
  
  //Approach 1: Preorder Traversal: Always Choose Left Middle Node as a Root
  var sortedArrayToBST = function(nums) {
    
    const helper = (left, right) => {
      if (left > right) return null;
      
      // always choose left middle node as a root
      const p = Math.trunc((left + right) / 2);
      
      // pre-order traversal: node -> left -> right
      const root = new TreeNode(nums[p]);
      root.left = helper(left, p - 1);
      root.right = helper(p + 1, right);
      
      return root;
    }
    
    return helper(0, nums.length - 1);
  }