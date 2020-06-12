/**
 * @param {number[]} nums
 * @return {number}
 */

// first approach
var maxSubArray = function(nums) {
  
  for (let i = 1; i < nums.length; i++)
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  
  let max_seen = nums[0];
  for (let i = 1; i < nums.length; i++)
    nums[i] = max_seen = Math.max(max_seen, nums[i]);
  
  return nums[nums.length - 1];
};

// Greddy approach
// Pick the locally optimal move at each step, 
// and that will lead to the globally optimal solution.
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
}

// Dynamic Programming (Kadane's algorithm)
var maxSubArray = function(nums) {
  let curSum = nums[0], maxSum = curSum;
  
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}