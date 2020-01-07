/**
 * @param {number[]} height
 * @return {number}
 */

// Using two pointers
var trap = function(height) {
  let ans = 0,
    left = 0,
    right = height.length - 1,
    left_max = 0,
    right_max = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) left_max = Math.max(left_max, height[left]);
      else ans += left_max - height[left];

      left++;
    } else {
      if (height[right] >= right_max)
        right_max = Math.max(right_max, height[right]);
      else ans += right_max - height[right];

      right--;
    }
  }
  return ans;
};

// Using dynamic Programming
var trap = function(height) {
  let ans = 0,
    size = height.length;
  let left_max = new Array(size).fill(0),
    right_max = new Array(size).fill(0);

  left_max[0] = height[0];
  right_max[size - 1] = height[size - 1];

  for (let i = 1; i < size; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }

  for (let i = size - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }

  for (let i = 0; i < size; i++)
    ans += Math.min(left_max[i], right_max[i]) - height[i];

  return ans;
};

// Brute Force (Also sort of Greedy)
var trap = function(height) {
  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    let max_left = 0,
      max_right = 0;

    for (let j = i; j >= 0; j--) max_left = Math.max(max_left, height[j]);

    for (let k = i; k < height.length; k++)
      max_right = Math.max(max_right, height[k]);

    ans += Math.min(max_left, max_right) - height[i];
  }
  return ans;
};
