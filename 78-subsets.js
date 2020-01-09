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

// Approach 3: Backtracking
var subsets = function(nums) {
  let output = [],
    n = nums.length;
  var k;

  const backtrack = (first = 0, curr = []) => {
    // if the combination is done
    if (curr.length == k) output.push([curr]);

    for (let i = first; i < n; ++i) {
      curr.push(nums[i]);
      backtrack(i + 1, curr);
      curr.pop();
    }
  };

  for (k = 0; k < n + 1; ++k) backtrack();

  return output;
};
