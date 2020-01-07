/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Brute force
var findMedianSortedArrays = function(nums1, nums2) {
  const sortNum = (a, b) => b - a;
  let all = nums1.concat(nums2).sort(sortNum);

  let len = all.length;
  let median = len / 2;
  let val;

  if (len % 2 == 1) val = all[Math.floor(median)];
  else val = (all[median - 1] + all[median]) / 2;

  return val;
};

// TODO: Complete line comments (link in scratch)
// The overall run time complexity should be O(log (m+n))
// Time complexity is O(log(min(x,y))
// Space complexity is O(1)
var findMedianSortedArrays = function(input1, input2) {
  if (input1.length > input2.length)
    return findMedianSortedArrays(input2, input1);

  let x = input1.length;
  let y = input2.length;

  let low = 0;
  let high = x;

  while (low <= high) {
    let partitionX = Math.trunc((low + high) / 2);
    let partitionY = Math.trunc((x + y + 1) / 2 - partitionX);

    let maxLeftX = partitionX == 0 ? Number.MIN_VALUE : input1[partitionX - 1];
    let minRightX = partitionX == x ? Number.MAX_VALUE : input1[partitionX];

    let maxLeftY = partitionY == 0 ? Number.MIN_VALUE : input2[partitionY - 1];
    let minRightY = partitionY == y ? Number.MAX_VALUE : input2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 == 0)
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      else return Math.max(maxLeftX, maxLeftY);
    } else if (maxLeftX > minRightY) high = partitionX - 1;
    else low = partitionX + 1;
  }

  throw new Error("input arrays were not sorted");
};
