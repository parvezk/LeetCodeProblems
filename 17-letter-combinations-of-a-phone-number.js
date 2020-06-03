/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length == 0) return [];
  
  const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'],
        combinations = [];
  
  const helper = (curr = '', index = 0) => {
    if (index == digits.length)
      combinations.push(curr);
    else {
      const digit = digits.charAt(index),
            candidates = mapping[+digit];
      
      for (let i = 0; i < candidates.length; i++)
        helper(curr + candidates.slice(i, i + 1), index + 1);
    }
  } 
  
  helper();
  return combinations;
  
};