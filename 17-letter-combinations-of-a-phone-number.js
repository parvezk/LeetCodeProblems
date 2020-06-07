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

/**
 * 
 * class Solution(object):
    def letterCombinations(self, s):
        if s == "":  # Hack for wrong test case, it should be [""]
            return []  
        
        digitmap = {
            '2': "abc", '3': "def", '4': "ghi",
            '5': "jkl", '6': "mno", '7': "pqrs",
            '8': "tuv", '9': "wxyz"
        }
        ans = []
        path = []
        
        def search(index):
            if index == len(s):
                ans.append("".join(path))
                return
            
            for char in digitmap[s[index]]:
                path.append(char)
                search(index + 1)
                path.pop()
        
        search(0)
        return ans
class Solution(object):
    def letterCombinations(self, s):
        if s == "":
            return []  
        
        digitmap = {
            '2': "abc", '3': "def", '4': "ghi",
            '5': "jkl", '6': "mno", '7': "pqrs",
            '8': "tuv", '9': "wxyz"
        }
        
        ans = []
        for choice in itertools.product(*(digitmap[c] for c in s)):
            ans.append("".join(choice))
        return ans
 */