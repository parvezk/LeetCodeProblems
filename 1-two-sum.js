/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//One-pass Hash Table
var twoSum = function(nums, target) {
  let HashMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    let compliment = target - current;

    if (HashMap.has(compliment)) return [HashMap.get(compliment), index];
    else HashMap.set(current, index);
  }
};
