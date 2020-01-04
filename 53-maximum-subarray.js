// Using Greedy approach
// Pick the locally optimal move at each step,
// and that will lead to the globally optimal solution.
var maxSubArray = function(nums) {
  let curSum = nums[0],
    maxSum = curSum;

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]); // local max
    maxSum = Math.max(maxSum, curSum); // global max
  }

  return maxSum;
};

// DP approach
var maxSubArray = function(nums) {
  let max_Sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];
    max_Sum = Math.max(max_Sum, nums[i]);
  }
  return max_Sum;
};
