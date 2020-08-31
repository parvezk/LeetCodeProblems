// https://leetcode.com/discuss/interview-question/407179/Bloomberg-or-Remove-array-elements-in-given-index-ranges

const removeInIndexRange = (arr, ranges) => {
    const sortFn = (a, b) => a[0] - b[0];
    ranges.sort(sortFn); //sort by start indexes
    
    const merge = input => {
      const output = [input[0]];
      
      for (let i = 0; i < input.length; i++) {
        let lastMerged = output[output.length - 1],
            range = input[i]
        if (range[0] <= lastMerged[1]) {
          lastMerged[0] = Math.min(lastMerged[0], range[0]);
          lastMerged[1] = Math.max(lastMerged[1], range[1]);
        } else
          output.push(input[i]);
      }
      return output;
    }
    const mergedRanges = merge(ranges);
    console.log(mergedRanges);
    console.log(arr)
    arr.splice(3, 5)
    console.log(arr);
    arr.splice(10 - 5, 13 - 10)
    console.log(arr);
  }
  
  (function main() {
    var arr = [-8, 3, -5, 1, 51, 56, 0, -5, 29, 43, 78, 75, 32, 76, 73, 76],
        ranges = [[5, 8], [10, 13], [3, 6], [20, 25]];
    //Output: [-8, 3, -5, 29, 43, 76, 73, 76]
    removeInIndexRange(arr, ranges);
  }());