/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [4,5,6,7,0,1,2] 0
// [4,5,6,7,0,1,2] 3
// [5,1,3] 5
var search = function(nums, target) {
  if (nums == null || nums.length == 0) return -1;

  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.trunc(start + (end - start) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      if (target <= nums[end] && target > nums[mid]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
};
