/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  const sortNum = (a, b) => b - a;
  let all = nums1.concat(nums2).sort(sortNum);

  let len = all.length;
  let median = len / 2;
  let val;

  if (len % 2 == 1) {
    val = all[Math.floor(len / 2)];
  } else {
    val = all[len / 2 - 1] + all[len / 2];
    val = val / 2;
  }

  val = Number.parseFloat(val);
  return val;
};
