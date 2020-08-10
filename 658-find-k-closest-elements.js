/*
 # approach: use binary search to find the start which is closest to x

        left = 0
        right = len(arr) - k

        while left < right:
            mid = left + (right - left) // 2

            # mid + k is closer to x, discard mid by assigning left = mid + 1
            if x - arr[mid] > arr[mid + k] - x:
                left = mid + 1

            # mid is equal or closer to x than mid + k, remains mid as candidate
            else:
                right = mid

        # left == right, which makes both left and left + k have same diff with x
        return arr[left : left + k]
*/
var findClosestElements = function(arr, k, x) {

  let left = 0;
  let right = arr.length - k;
  // use binary search to find index
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    
    if (x - arr[mid] > arr[mid + k] - x)
      left = mid + 1;
    else
      right = mid;
  }
  return arr.slice(left, left + k);
};