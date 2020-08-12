/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Time: O(n^2)
var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i];
    
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      const mod = k == 0 ? sum : sum % k;
      if (mod == 0)
        return true;
    }
  }
  return false;
};

// Using HashMap
var checkSubarraySum = function(nums, k) {
  const map = new Map() // {mod, index}
  map.set(0, -1);
  
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    
    if (k != 0)
      sum = sum % k;
    
    if (map.has(sum)) {
      if (i - map.get(sum) > 1)
        return true;
    } else
        map.set(sum, i);
  }
  return false
}

/*
var checkSubarraySum = function(nums, k) {
  const map = new Map() // {mod, index}
  map.set(0, -1);
  
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    
    let mod = sum % k;
    if (mod == 0) return true;
    
    if (map.has(mod))
      return true;
  }
  return false
}*/