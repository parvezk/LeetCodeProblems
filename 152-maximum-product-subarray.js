/**
 * @param {number[]} nums
 * @return {number}
 */
// Approach 2: Dynamic Programming
// Using Greedy approach
// Pick the locally optimal move at each step, 
// and that will lead to the globally optimal solution.
var maxProduct = function(nums) {
  let res = nums[0],
      min_so_far = res,
      max_so_far = res;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      const temp = min_so_far;
      min_so_far = max_so_far;
      max_so_far = temp;
    }
    min_so_far = Math.min(nums[i], min_so_far * nums[i]);
    max_so_far = Math.max(nums[i], max_so_far * nums[i]);
    res = Math.max(res, imax);
  }
  return res;
};