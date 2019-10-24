/**
 * @param {number} k
 * @param {number[]} nums
 */

function TreeNode(val) {
  this.val = val;
  this.count = 0;
  this.left = this.right = null;
}

class KthLargest {
  constructor(k, nums) {
    this.root = null;
    this.kthLargest = k;

    this.constructBST(nums);
    //this.printInOrder(this.root);
  }

  constructBST(nums) {
    for (let n of nums) {
      this.root = this.insert(this.root, n);
    }
  }

  insert(root, val) {
    // Base Case
    if (root == null) {
      const newNode = new TreeNode(val);
      newNode.count = 1;
      return newNode;
    }
    // Recursive Case
    if (val > root.val) root.left = this.insert(root.left, val);
    else root.right = this.insert(root.right, val);

    root.count++;
    return root;
  }

  add(val) {
    this.root = this.insert(this.root, val);
    return this.Select(this.root, this.kthLargest).val;
  }

  searchKth(x, i) {
    let size = x.left ? x.left.count : 0;
    let k = 1 + size;

    if (i == k) return x;
    else if (i < k) return this.searchKth(x.left, i);
    else return this.searchKth(x.right, i - k); // i>k
  }

  printInOrder(curr) {
    if (curr != null) {
      this.printInOrder(curr.left);
      console.log(curr.val);
      this.printInOrder(curr.right);
    }
  }
}

var obj = new KthLargest(3, [4, 5, 8, 2]);
obj.printInOrder();
console.log(obj.add(3).val);
console.log(obj.add(5).val);
console.log(obj.add(10).val);
console.log(obj.add(9).val);
console.log(obj.add(4).val);

/* int k = 3;
  int[] arr = [4,5,8,2];
  KthLargest kthLargest = new KthLargest(3, arr);
  kthLargest.add(3);   // returns 4
  kthLargest.add(5);   // returns 5
  kthLargest.add(10);  // returns 5
  kthLargest.add(9);   // returns 8
  kthLargest.add(4);   // returns 8 */
