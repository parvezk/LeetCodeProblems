/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const HashMap = new Map();
  const indices = [];

  for (let i = 0; i < nums.length; ++i) {
    let compliment = target - nums[i];
    if (HashMap.has(compliment)) {
      indices.push(HashMap.get(compliment));
      indices.push(i);
      return indices;
    }
    HashMap.set(nums[i], i);
  }
};
