/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let longest_pre = "";
  if (!strs.length) return longest_pre;

  let shortest_str = strs.reduce(
    (W, accum) => (accum.length > W.length ? W : accum),
    strs[0]
  );

  for (let i = 0; i < shortest_str.length; ++i) {
    const prefix = shortest_str.slice(0, i + 1);
    if (strs.every(x => x.startsWith(prefix))) longest_pre = prefix;
    else break;
  }
  return longest_pre;
};

/*
  ["dog","racecar","car"]
  output: "fl"
  ["flow", "flower","flow","float", "float", "floating"]
  output: "flo"
  ["dog","racecar","car"]
  output: ""
  */
