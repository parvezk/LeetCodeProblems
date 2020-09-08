/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => nums.splice(0, nums.length, ...new Set(nums)).length;

var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  
  return i + 1;
};