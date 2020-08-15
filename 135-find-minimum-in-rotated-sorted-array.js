/**
 * @param {number[]} nums
 * @return {number}
 */
//[4, 5, 6, 7, 0, 1, 2]
var findMin = function(nums) {
  if (nums.length == 1) return nums[0];
  
  let start = 0, end = nums.length;
  
  // No rotation
  if (nums[end] > nums[start])
    return nums[start];
  
  while (start < end) {
    let pivot = start + Math.trunc((end - start) / 2);
    
    if (nums[pivot] > nums[pivot + 1])
      return nums[pivot + 1];
    
    else {
      if (nums[pivot] > nums[start])
        start = pivot + 1;
      else
        end = pivot;
    }
  }
  return -1;
};