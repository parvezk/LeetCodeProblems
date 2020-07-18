/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique (nums) {
    var solution = [];
    nums.sort((a, b) => a - b);
    findPermutations(nums, solution, [], new Set());
    return solution
  };
  
  function findPermutations (nums, solution, current, usedSet) {
    if (current.length == nums.length) {
      return solution.push(current.slice());
    }
    
    for (let i = 0; i < nums.length; i++) {
      if (usedSet.has(i)) continue;
      
      if (i > 0 && nums[i] === nums[i - 1] && !usedSet.has(i - 1))
        continue;
      
      current.push(nums[i]);
      usedSet.add(i);
      findPermutations(nums, solution, current, usedSet);
      current.pop();
      usedSet.delete(i)
    }
  }