/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
//FAILED

var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
  let HashMap = new Map();
  let m = k;
  
  for (let i = 0; i < nums.length && m >= 0; i++) {
    for (let j = i + 1; j < nums.length && m >= 0; j++) {
      HashMap.set([i, j], Math.abs(nums[i] - nums[j]));
    }
  }
  
  let mapArr = [...HashMap.entries()];
  mapArr = mapArr.map( (m) => m[1])
  mapArr = mapArr.sort((a, b) => a - b);
  //console.log(mapArr)
  return mapArr[k-1]
};
*/

// Binary Search + Sliding Window [Accepted]
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
  
  let lo = 0
  let hi = nums[nums.length - 1] - nums[0];
  
  while (lo < hi)
  {
    let mi = parseInt((hi + lo) / 2);
    let count = 0, left = 0;
    
    for (let right = 0; right < nums.length; ++right)
    {
      while (nums[right] - nums[left] > mi) 
        left++;
      count += right - left;
    }
    // count number of pairs with distance <= mi
    if (count >= k) hi = mi;
    else lo = mi + 1;
  }
  return lo;
};