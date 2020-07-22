/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const matches = (s1arr, s2arr) => {
    for (let i = 0; i < 26; i++) {
      if (s1arr[i] != s2arr[i]) 
        return false;
    }
    return true;
  }
  
  var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const s1arr = new Array(26).fill(0),
          s2arr = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
      s1arr[s1.charCodeAt(i) - 97]++;
      s2arr[s2.charCodeAt(i) - 97]++;
    }
    
    for (let i = 0; i < s2.length - s1.length; i++) {
      if (matches(s1arr, s2arr)) return true;
      
      s2arr[s2.charCodeAt(i + s1.length) - 97]++;
      s2arr[s2.charCodeAt(i) - 97]--;
    }
    return matches(s1arr, s2arr);
  };