/*
[[1,3],[6,9]]
[2,5]
[[1,2],[3,5],[6,7],[8,10],[12,16]]
[4,8]
[[1,5]]
[0,0]
[]
[5,7]
[[1,5]]
[2,3]
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  
  let pos = 0;
  while (pos < intervals.length && newInterval[0] > intervals[pos][0])
    pos++;
  
  intervals.splice(pos, 0, newInterval);
  
  const output = [intervals.shift()];
  
  for (let interval of intervals) {
    let last = output[output.length - 1];
    
    if (last[1] >= interval[0])
      last[1] = Math.max(last[1], interval[1]);
    else
      output.push(interval);
  }

  return output;
};