/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  
    let ans = [];
    
    const backtrack = (curr, open, close, max) => {
      console.log(curr, open, close, max);
      
      if (curr.length == max * 2)
        ans.push(curr)
      
      if (open < max)
        backtrack(curr + '(', open + 1, close, max);
        
      if (close < open)
        backtrack(curr + ')',  open, close + 1, max);
    }
    
    backtrack('', 0, 0, n);
    return ans;
  };