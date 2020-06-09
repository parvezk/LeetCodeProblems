/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Sorting approach
var isAnagram = function(s, t) {
  return (s.split("").sort().join("") == t.split("").sort().join(""));
};

// Hashmap approach
var isAnagram = function(s, t) {
  const map = new Map();
  let c;
  
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    
    if (map.has(c))
      map.set(c, map.get(c) + 1);
    else
      map.set(c, 1);
  }
  
  for (let j = 0; j < t.length; j++) {
    c = t.charAt(j);
    
    if (map.has(c)) {
      if (map.get(c) > 1)
        map.set(c, map.get(c) - 1);
      else
        map.delete(c)
    } else
      map.set(c, 1);
  }
  //return map.size <= 0 ? true : false;
  return map.size == 0;
};
