class Solution(object):
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