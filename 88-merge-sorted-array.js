/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let nums1_cpy = nums1.slice(0, m);
  nums1.length = 0;
  // Get pointers for nums1_copy and nums2
  let p1 = 0,
    p2 = 0;
  // Set pointers for nums1
  let p = 0;

  while (p1 < m && p2 < n)
    nums1[p++] = nums1_cpy[p1] < nums2[p2] ? nums1_cpy[p1++] : nums2[p2++];

  if (p1 < m) nums1.splice(p, 0, ...nums1_cpy.slice(p1));

  if (p2 < n) nums1.splice(p, 0, ...nums2.slice(p2));

  //nums1.length = m + n;
};
