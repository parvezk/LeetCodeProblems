/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Hash Table
var containsDuplicate = function(nums) {
  if (nums.length <= 1) return false;
  const set = new Set();
  for (let n of nums) {
    if (set.has(n)) return false;
    set.add(n);
  }
  return false;
};

// Sorting
var containsDuplicate = function(nums) {
  if (nums.length <= 1) return false;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1])
      return true;
  }
  return false;
}