/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//nums = [-1,0,3,5,9,12], target = 9
var search = function(nums, target) {
    
  let leftIndex = -1; // left bound
  let rightIndex = nums.length; // right bound
  
  while (leftIndex + 1 < rightIndex) {
    
    let distance = rightIndex - leftIndex;  // search space
    let middle = Math.floor (distance / 2); // middle index / condition
    let index = leftIndex + middle; // search index
    
    if (target == nums[index])
      return index;
    
    if (target < nums[index])
      rightIndex = index;
    else
      leftIndex = index;
  }
  
  return -1;
};

var search = function(nums, target) {
  
  let left = 0,
      right = nums.length - 1;
  
  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    
    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return - 1;
};