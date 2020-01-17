/**
 * @param {number[]} seats
 * @return {number}
 */
// Self approach
var maxDistToClosest = function(seats) {
  let closest = [],
    left,
    right;

  for (let i = 0; i < seats.length; i++) {
    left = right = i;
    // scan left of i
    while (left > 0 && seats[left] == 0) left--;
    // scan right of i
    while (right < seats.length && seats[right] == 0) right++;

    if (i == 0) closest[i] = right - i;
    else if (i == seats.length - 1) closest[i] = i - left;
    else closest[i] = Math.min(i - left, right - i);
  }
  return Math.max(...closest);
};
