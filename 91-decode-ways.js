/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = new Map() // {index, substring}
    
    const recursiveWithMemo = (index, str) => {
      
      if (index == s.length) return 1;
      
      if (str.charAt(index) == '0') return 0;
      
      if (index == s.length - 1) return 1;
      
      if (memo.has(index)) return memo.get(index);
      
      let ans = recursiveWithMemo(index + 1, str);
      if (+str.substring(index, index + 2) <= 26)
        ans += recursiveWithMemo(index + 2, str);
      
      memo.set(index, ans);
      return ans;
    }
    
    if (s == null || s.length == 0)
      return 0;
    
    return recursiveWithMemo(0, s);
  };