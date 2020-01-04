/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Why do we want to find (sum-k) in our hash table?
//Because we need to find a subarray whose sum equals k. As we use prefix sum, so we could look up whether there are two subarrays(starting from index 0) and their subtraction equals k. Currently, we get the sum starting from index 0 equals to sum. So, we should look up whether there is a subarray starting from index 0, equals to (sum - k)

// Using HashMap - Cumulative Sum (Remember Animation with live var updates)
var subarraySum = function(nums, k) {
  // (sum[i],no.ofoccurencesofsum[i])
  let HashMap = new Map();
  HashMap.set(0, 1);
  let counter = 0,
    sum = 0;

  for (n of nums) {
    sum += n;

    if (HashMap.has(sum - k)) counter += HashMap.get(sum - k);

    if (HashMap.has(sum)) HashMap.set(sum, HashMap.get(sum) + 1);
    else HashMap.set(sum, 1);
  }
  return counter;
};

// Using Cumulative Sum Array
var subarraySum = function(nums, k) {
  let counter = 0,
    len = nums.length;
  let sums = [0];

  for (let i = 1; i <= len; i++) sums[i] = sums[i - 1] + nums[i - 1];

  for (let start = 0; start < len; start++) {
    for (let end = start + 1; end <= len; end++) {
      if (sums[end] - sums[start] == k) counter++;
    }
  }
  return counter;
};

// Cumulative Sum - Without Space
// Time: O(n*2) we need to consider every subarray possible; Space: O(1)
var subarraySum = function(nums, k) {
  let counter = 0,
    len = nums.length;

  for (let start = 0; start < len; start++) {
    let sum = 0;

    for (let end = start; end < len; end++) {
      sum += nums[end];

      if (sum == k) counter++;
    }
  }
  return counter;
};
