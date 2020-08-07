/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// may be O(NlogN)
var intersect = function(nums1, nums2) {
  let res = [];
  
  for (let n of nums1) {
    if (nums2.includes(n)) {
      res.push(n);
      nums2.splice(nums2.indexOf(n), 1);
    }
  }
  
  return res;
};
// Sorting approach
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b); 
  let i = 0, j = 0, k = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j])
      i++;
    else if (nums1[i] > nums2[j])
      j++;
    else {
      nums1[k++] = nums1[i++];
      j++;
    }
  }
  return nums1.slice(0, k)
}