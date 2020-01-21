/**
 * @param {number[]} height
 * @return {number}
 */
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
