/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
//Recursion with memoization
// With memorization many redundant subproblems are avoided and
// recursion tree is pruned and thus it reduces the time complexity by a large factor.
var wordBreak = function(s, word) {
  let map = new Map();

  const word_Break = (s, start, wordDict) => {
    if (map.has(start)) return map.get(start);

    let res = [];
    if (start == s.length) res.push("");

    for (let end = start + 1; end <= s.length; end++) {
      if (wordDict.has(s.substring(start, end))) {
        let list = word_Break(s, end, wordDict);
        for (let l of list)
          res.push(s.substring(start, end) + (l == "" ? "" : " ") + l);
      }
    }
    // store all the sentences that can be formed using substring from start index onward
    map.set(start, res);
    return res;
  };

  return word_Break(s, 0, new Set(words));
};
