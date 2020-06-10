/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Approach 1 (Mostly O(logN))
var searchRange = (nums, target) => {
  const res = [-1, -1];
  
  if (!nums.includes(target))
    return res;
  else
    return [nums.indexOf(target), nums.lastIndexOf(target)]; 
}

// Approach 2
const extremeInsertionIndex = (nums, target, left) => {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    let mid = Math.trunc((lo + hi) / 2);

    if (nums[mid] > target || (left && target == nums[mid])) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};

const searchRange = (nums, target) => {
  const targetRange = [-1, -1];

  let leftIndex = extremeInsertionIndex(nums, target, true);

  if (leftIndex == nums.length || nums[leftIndex] != target) return targetRange;

  targetRange[0] = leftIndex;
  targetRange[1] = extremeInsertionIndex(nums, target, false) - 1;

  return targetRange;
};
