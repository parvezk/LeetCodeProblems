/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = nums => {
  let lastGoodIndexPosition = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastGoodIndexPosition) lastGoodIndexPosition = i;
  }

  return lastGoodIndexPosition == 0;
};
