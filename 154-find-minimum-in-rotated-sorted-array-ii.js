/**
 * @param {number[]} nums
 * @return {number}
 */
// O(N) Linear Approach
var findMin = function(nums) {
  if (nums.length == 1) return nums[0];
  
  let left = 0, right = nums.length - 1;
  
  while (left + 1 < right) {
    
    if (nums[right] > nums[left])
    return nums[left];
    
    const mid = left + (right - left >> 1);
    
    if (nums[mid] > nums[mid + 1])
      return nums[mid + 1];
    
    if (nums[mid] > nums[0])
      left = mid
    else if (nums[mid] < nums[0])
     right = mid
    else
      left += 1
  }
  
  if (nums[right] > nums[left])
    return nums[left];
  else
    return nums[right]
};
// O(logN)
var findMin = function(nums) {
  if (nums.length == 1) return nums[0];
  
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    const mid = left + (right - left >> 1);
    
    if (nums[mid] < nums[right])
      right = mid;
    else if (nums[mid] > nums[right])
      left = mid + 1;
    else
      right -= 1
  }
  
  return nums[left];
}