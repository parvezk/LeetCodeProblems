/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
      let p = s.charAt(i);
      if (p == '(') stack.push(i);
      else if (p == ')') {
        if (stack.length)
        {
          stack.pop();
          if (stack.length)
          {
            let top = stack[stack.length - 1];
            let len = i - top;
            maxLen = Math.max(maxLen, len)
          }
          else
            stack.push(i)
        }
        else
          stack.push(i)
      }
    }
    return maxLen;
  };