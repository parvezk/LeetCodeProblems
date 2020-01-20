/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = -1;
  index = nums.indexOf(target);
  if (index < 0) {
    index = 0;
    let i = 0;
    x = 1;
    while (i < nums.length) {
      if (target > nums[i] && target < (nums[x] || 0)) {
        return i + 1;
      } else if (target > nums[i] && i == nums.length - 1) {
        return i + 1;
      }

      i++;
      x = i + 1;
    }
  }
  return index;
};
