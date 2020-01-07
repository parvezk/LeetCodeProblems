/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = intervals[0] ? [intervals[0]] : []; // merged times

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i],
      lastMerged = output[output.length - 1];
    if (current[0] <= lastMerged[1]) {
      //lastMerged[1] = Math.max(interval[1], lastMerged[1]);
      lastMerged[1] = current[1] >= lastMerged[1] ? current[1] : lastMerged[1];
    } else output.push(current);
  }
  return output;
};
