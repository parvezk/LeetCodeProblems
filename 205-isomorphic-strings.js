/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map1 = new Map(), map2 = new Map();
  
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (map1.has(c)) map1.get(c).push(i)
    else map1.set(c, [i]);
    
    let d = t.charAt(i);
    if (map2.has(d)) map2.get(d).push(i)
    else map2.set(d, [i]);
  }
  
  map1 = [...map1.values()];
  map2 = [...map2.values()];
  if (map1.length != map2.length) return false

  return map1.every((arr, i) => arr.every((n, j) => n == map2[i][j]));
};
