/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const Height = node => {
    if (node == null)
        return 0;
    else {
        let heightLeft = Height(node.left);
        let heightRight = Height(node.right)
        if (heightLeft > heightRight)
            return heightLeft + 1;
        else
            return heightRight + 1;
    }
}

const Difference = node => {
 
    return Math.abs(Height(node.left) - Height(node.right))
}

var isBalanced = function(root) {
    if (root == null) return true;
    // balanceFactor
    
    if (root.left != null && Difference(root.left) > 1) return false;
    if (root.right != null && Difference(root.right) > 1) return false;
    
    if (!isBalanced(root.left) || !isBalanced(root.right))
        return false;
    
    if (Difference(root) > 1)
        return false;
    
    return true;
};

/*
[1,2,2,3,3,null,null,4,4]
[3,9,20,null,null,15,7]
[]
[1,2,2,3,null,null,3,4,null,null,4]
*/
