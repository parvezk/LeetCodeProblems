/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length == 0 || !nums.includes(val)) return nums.length;

  while (nums.includes(val)) nums.splice(nums.indexOf(val), 1);

  return nums.length;
};
