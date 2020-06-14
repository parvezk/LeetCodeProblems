/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  
    let counts = nums.reduce((accum, curr, index) => {
      let total = 0;
      for (let i = index; i < nums.length; i++)
        if (nums[i] < curr) total++;
      
      accum[index] = total;
      return accum;
    }, []);
  
    return counts;
  };