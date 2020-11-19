/**
 * @param {number[]} height
 * @return {number}
 */
// Two pointer approach - SELF - PROUD OF IT
var maxArea = function(height) {
  let left = 0,
    right = height.length - 1,
    ans = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      ans = Math.max(ans, height[left] * (right - left));
      left++;
    } else {
      ans = Math.max(ans, height[right] * (right - left));
      right--;
    }
  }
  return ans;
};

// Two pointer - Modified
var maxArea = function(height) {
  let maxarea = 0,
    l = 0,
    r = height.length - 1;

  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));

    if (height[l] < height[r]) l++;
    else r--;
  }
  return maxarea;
};
