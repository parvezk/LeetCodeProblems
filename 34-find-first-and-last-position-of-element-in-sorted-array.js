/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Also called: Search for a range
// worst: O(2N); best: O(N)
var searchRange = (nums, target) => {
  const res = [-1, -1];
  
  if (!nums.includes(target))
    return res;
  else
    return [nums.indexOf(target), nums.lastIndexOf(target)]; 
}

const extremeInsertionIndex = (nums, target, left) => {
  let lo = 0, hi = nums.length;
  
  while (lo < hi) {
    let mid = Math.trunc((hi + lo) / 2);
    
    if (nums[mid] > target || (left && nums[mid] == target))
      hi = mid;
    else
      lo = mid + 1;
  }
  return lo;
}
// algorithm's runtime complexity must be in the order of O(log n).
var searchRange = (nums, target) => {
  let res = [-1, -1];
   
  const leftIndex = extremeInsertionIndex(nums, target, true);
  
  if (leftIndex == nums.length || nums[leftIndex] != target)
    return res;
  
  res[0] = leftIndex;
  res[1] = extremeInsertionIndex(nums, target, false) - 1;
  
  return res;
}