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

// Next Array
var maxDistToClosest = function(seats) {
  let N = seats.length,
    left = new Array(N).fill(N),
    right = new Array(N).fill(N);

  for (let i = 0; i < N; i++) {
    if (seats[i] == 1) left[i] = 0;
    else if (i > 0) left[i] = left[i - 1] + 1;
  }

  for (let i = N - 1; i >= 0; i--) {
    if (seats[i] == 1) right[i] = 0;
    else if (i < N - 1) right[i] = right[i + 1] + 1;
  }
  console.log(left);
  console.log(right);
  let ans = 0;
  for (let i = 0; i < N; i++) {
    if (seats[i] == 0) ans = Math.max(ans, Math.min(left[i], right[i]));
  }
  return ans;
};
