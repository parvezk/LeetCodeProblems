/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = new Map();

  let minWinLen = Number.MAX_VALUE,
      ans = '', counter = map.size,
      begin = 0, end = 0;
  
  for (let char of t) {
    if (map.has(char))
      map.set(char, map.get(c) + 1);
    else
      map.set(char, 1);
  }
  
  while (end < s.length) {
    let endChar = s.charAt(end);
    
    if (map.has(endChar))
      map.set(endChar, map.get(endChar) - 1);
    
    if (map.get(endChar) == 0) counter--;
    
    end++;
    
    while (counter == 0) {
      if (end - begin < minWinLen) {
        minWinLen = end - begin;
        ans = s.substring(begin, end);
      }
        
      let startChar = s.charAt(begin);
      
      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);
        if (map.get(startChar) > 0) counter++;
      }
      begin++;
    }
  }
  return ans;
};