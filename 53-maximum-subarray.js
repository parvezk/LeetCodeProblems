/**
 * @param {number[]} nums
 * @return {number}
 */

// DP approach
var maxSubArray = function(nums) {
  let curr_sum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], curr_sum + nums[i])
  }
  let max_seen = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max_seen = Math.max(max_seen, nums[i]);
    nums[i] = max_seen;
  }
  
  return nums[nums.length - 1];
}
  

// Using Greedy approach
// Pick the locally optimal move at each step, 
// and that will lead to the globally optimal solution.
var maxSubArray = function(nums) {
  let curSum = nums[0], maxSum = curSum;
  
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]) // local max
    maxSum = Math.max(maxSum, curSum);  // global max
  }
  
  return maxSum;
};