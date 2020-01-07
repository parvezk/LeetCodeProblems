/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Recursion 1
var subsets = function(nums) {
  if (nums.length == 0) return [[]];
  else {
    let partials = subsets(nums.slice(1));
    let output = []; // all subsets
    for (let subset of partials) {
      output.push(subset);
      output.push([nums[0], ...subset]);
    }

    return output;
  }
};

// Recursion 2 (recurse over candidates)
// Time: O(N * 2*N); Space: O(2*N)
const subsets = nums => {
  let output = [[]];

  for (let num of nums) {
    let newSubset = [];

    for (let curr of output) newSubset.push([num, ...curr]);

    for (let curr of newSubset) output.push(curr);
  }
  return output;
};
