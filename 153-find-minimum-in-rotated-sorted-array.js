/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(logN); Space: O(1)
var findMin = function(nums) {
    if (nums.length == 1) return nums[0];
    
    let left = 0, right = nums.length - 1;
    
    // No rotation
    if (nums[right] > nums[left])
      return nums[0];
    
    // Binary search way
    while (left < right) {
      const mid = left + Math.trunc((right - left) / 2);
      
      if (nums[mid] > nums[mid + 1])
        return nums[mid + 1];
      
      if (nums[mid] < nums[mid - 1])
        return nums[mid];
      
      if (nums[mid] > nums[left])
        left = mid + 1;
      else
        right = mid
    }
    return -1;
  };
  
  var findMin = function(nums) {
    let lo = 0, hi = nums.length - 1;
    
    while (lo < hi) {
      const mid = lo + Math.trunc((hi - lo) / 2);
      
      if (nums[mid] < nums[hi])
        hi = mid;
      else
        lo = mid + 1;
    }
    return nums[lo];
  }