/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Close to Dequeu Approach & Better than - Use a Hammer - O(Nk)
// Time complexity : O(N), since each element is processed once
var maxSlidingWindow = function(nums, k) {
  if (nums.length == 0) return [];

  //Process the first k elements separately to initiate the deque.
  let window = [...nums.slice(0, k)];
  let output = [Math.max(...window)];

  for (let i = k; i < nums.length; i++) {
    window.shift();
    window.push(nums[i]);
    output.push(Math.max(...window));
  }

  return output;
};

// Dynamic programming
// Time complexity : O(N); Space complexity: O(n)
var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  if (n * k == 0) return [];
  if (k == 1) return nums;

  let left = new Array(n),
    right = new Array(n);

  left[0] = [nums[0]];
  right[n - 1] = [nums[n - 1]];

  for (let i = 1; i < n; i++) {
    // from left to right
    if (i % k == 0) left[i] = nums[i];
    // block start
    else left[i] = Math.max(left[i - 1], nums[i]);

    // from right to left
    let j = n - i - 1;
    if ((j + 1) % k == 0) right[j] = nums[j];
    // block end
    else right[j] = Math.max(right[j + 1], nums[j]);
  }

  let output = [];
  for (let i = 0; i < n - k + 1; i++)
    output[i] = Math.max(left[i + k - 1], right[i]);

  return output;
};
