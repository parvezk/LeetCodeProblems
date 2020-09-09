/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(1) space approach
// Time: O(N); Space: O(1)
var productExceptSelf = function(nums) {
    const productOfAllExceptSelf = [];
    let productSoFar = 1;
    
    for (let i = 0; i < nums.length; i++) {
      productOfAllExceptSelf.push(productSoFar);
      productSoFar *= nums[i];
    }
    
    productSoFar = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
      productOfAllExceptSelf[j] *= productSoFar;
      productSoFar *= nums[j];
    }
    
    return productOfAllExceptSelf;
  };