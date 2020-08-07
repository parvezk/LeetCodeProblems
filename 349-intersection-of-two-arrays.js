/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// it's a FB questions. see solution comment - by hasanseirafi
var intersection = function(nums1, nums2) {
  let set = new Set();
  
  nums1.forEach(num => {
    if (nums2.includes(num))
      set.add(num);
  });
  
  return [...set];
};

var intersection = function(nums1, nums2) {
  const filtered = nums1.filter(n => nums2.includes(n)),
        set = new Set(filtered);
  return [...set];
};