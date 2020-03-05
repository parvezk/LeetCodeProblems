/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
  
    const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'],
          list = [];
    
    if (digits.length == 0) return list;
    
    const helper = (curr, index) => {
  
      if (index == digits.length)
        list.push(curr)
      else {
        let pos = Number.parseInt(digits.charAt(index)),
            candidates = mapping[pos];
  
        for (let i = 0; i < candidates.length; i++)
          helper(curr + candidates.substring(i, i + 1), index + 1);
      }
    };
    
    helper('', 0);
    return list;
  };