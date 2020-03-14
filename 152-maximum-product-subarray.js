/**
 * @param {number[]} nums
 * @return {number}
 */

// Using Greedy approach
// Pick the locally optimal move at each step, 
// and that will lead to the globally optimal solution.
var maxProduct = function(nums) {
  let res = nums[0];
  
  for (let i = 1, imin = res, imax = res; i < nums.length; i++) {
    
    if (nums[i] < 0) {
      const temp = imin;
      imin = imax;
      imax = temp;
    }
    
    imax = Math.max(nums[i], imax * nums[i]);
    imin = Math.min(nums[i], imin * nums[i]);
    
    res = Math.max(res, imax);
  }
  return res;
};

/*
[2,3,-2,4]
[-2,0,-1]
[-2,3,-4]
*/