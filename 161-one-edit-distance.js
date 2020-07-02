/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    const ns = s.length, 
          nt = t.length;
    
    // Ensure s is shorter than t
    if (ns > nt)
      return isOneEditDistance(t, s);
    // The strings are not one edit away distance
    // if the length diff is more than 1
    if (nt - ns > 1) return false;
    
    for (let i = 0; i < ns; i++) {
      if (s.charAt(i) != t.charAt(i)) {
        //if strings have the same / diff length
        if (ns == nt) {
          return s.substring(i + 1) == t.substring(i + 1);
        } else {
          return s.substring(i) == t.substring(i + 1)
        }
      }
    }
    // if there is no diffs on nd distance
    // the strings are one edit away only if t has one more chracter.
    return (ns + 1 == nt);
  };