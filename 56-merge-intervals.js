/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = intervals[0] ? [intervals.shift()] : []; // merged times

  for (let interval of intervals) {
    const last = output[output.length - 1];
    if (interval[0] <= last[1])
      //last[1] = Math.max(interval[1], last[1]);
      last[1] = last[1] > interval[1] ? last[1] : interval[1];
    else 
      output.push(interval);
  }
  return output;
};
