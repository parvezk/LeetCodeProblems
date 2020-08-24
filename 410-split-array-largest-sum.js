/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

//Binary Search + Greedy
var splitArray = function(nums, m) {
  let l = 0, r = 0, n = nums.length;
  
  for (let i = 0; i < n; i++) {
    r += nums[i];
    if (l < nums[i]) l = nums[i];
  }
  let ans = r;
  
  while (l <= r) {
    let mid = Math.trunc((l + r) / 2);
    let sum = 0, cnt = 1;
    
    for (let i = 0; i < n; i++) {
      if (sum + nums[i] > mid) {
        cnt++;
        sum = nums[i];
      } else {
        sum += nums[i];
      }
    }
    
    if (cnt <= m) {
      ans = Math.min(ans, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
};

// Using Dynamic Programming 
var splitArray = function(nums, m) {
  let n = nums.length,
      f = new Array(n + 1).fill(null).map(
        () => new Array(m + 1).fill(Number.MAX_VALUE)),
      sub = new Array(n + 1).fill(0);
  
  for (let i = 0; i < n; i++)
    sub[i + 1] = sub[i] + nums[i];
  
  f[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      for (let k = 0; k < i; k++)
        f[i][j] = Math.min(f[i][j], Math.max(f[k][j - 1], sub[i] - sub[k]));
    }
  }
  return f[n][m]
};