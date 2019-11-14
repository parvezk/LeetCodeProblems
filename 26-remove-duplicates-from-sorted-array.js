/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; ++j) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

/*
[1,1,2]
[0,0,1,1,1,2,2,3,3,4]
[1,2,3]
[]
[1,1,1,1]
*/
