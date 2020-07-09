/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const matches = (s1map, s2map) => {
    for (let i = 0; i < 26; i++) {
      if (s1map[i] != s2map[i])
        return false;
    }
    return true;
  }
  
  var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length)
              return false;
    let s1map = new Array(26).fill(0);
    let s2map = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1map[s1.charCodeAt(i) - 97]++;
        s2map[s2.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches(s1map, s2map))
            return true;
        s2map[s2.charCodeAt(i + s1.length) - 97]++;
        s2map[s2.charCodeAt(i) - 97]--;
    }
    return matches(s1map, s2map);
  };