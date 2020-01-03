/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Approach 1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) nums.copyWithin(lastNonZeroFoundAt++, i, i + 1);
  }
  nums.fill(0, lastNonZeroFoundAt);
};

// Approach above
//[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

//[1, 2, 3, 4, 5].copyWithin(len-1, i);
// [4, 5, 3, 4, 5]

//[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
