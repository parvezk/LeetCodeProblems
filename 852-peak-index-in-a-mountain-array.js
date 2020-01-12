/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let left = 0,
    right = A.length - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    console.log(mid);
    if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) return mid;
    else if (A[mid] < A[mid - 1]) right = mid - 1;
    else left = mid + 1;
  }
  // End condition: left > right
  return -1;
};
