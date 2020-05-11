/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const output = [];
    let prev = lower - 1, curr;
    
    const getRanges = (from, to) => 
    from == to ? from.toString() : from  + '->' + to;
    
    for (let i = 0; i <= nums.length; i++) {
      curr = i == nums.length ? upper + 1 : nums[i];
      
      if (curr - prev >= 2)
        output.push(getRanges(prev + 1, curr - 1));
      
      prev = curr;
    }
    return output;
  };
  
  /*
  [-1]
  -2
  -1
  []
  -3
  -1
  []
  1
  1
  [-1]
  -1
  -1
  [-1]
  -2
  0
  [0, 1, 3, 50, 75]
  0
  99
  */