/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/*
[[1,3],[6,9]]
[2,5]
[[1,2],[3,5],[6,7],[8,10],[12,16]]
[4,8]
[[1,5]]
[0,0]
*/
var insert = function(intervals, newInterval) {
  let pos = 0;
  while (newInterval[0] > intervals[pos][0]) pos++;

  intervals.splice(pos, 0, newInterval);

  let output = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i],
      lastMerged = output[output.length - 1];

    if (interval[0] <= lastMerged[1])
      lastMerged[1] = Math.max(lastMerged[1], interval[1]);
    else output.push(interval);
  }
  return output;
};
