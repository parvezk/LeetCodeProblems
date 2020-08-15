/**
 * @param {number[]} nums
 * @return {number}
 */

// Just JavasScript
var findDuplicate = function(nums) {
    return nums.filter(n => nums.indexOf(n) !== nums.lastIndexOf(n))[0];
  };
  
  // Sorting
  var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] == nums[i - 1])
        return nums[i];
    }
    return -1;
  }
  
  // Set
  var findDuplicate = function(nums) {
    const set = new Set();
    
    for (let num of nums) {
      if (set.has(num)) return num;
      else set.add(num);
    }
    return -1
  }