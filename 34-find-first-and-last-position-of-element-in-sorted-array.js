/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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
