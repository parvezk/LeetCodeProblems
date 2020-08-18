/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const matches = (map1, map2) => {
    const map1arr = [...map1.entries()];
    return map1arr.every((item) => {
      const [key, val] = item;
      if (map2.has(key) && map2.get(key) == val) 
        return true;
      else 
        return false;
    });
  }
  
  var findAnagrams = function(s, p) {
    const ns = s.length, 
          np = p.length,
          output = [];
    
    if (ns < np) return output;
    
    const pCount = new Map(), 
          sCount = new Map();
    
    for (let ch of p) {
      if (pCount.has(ch))
        pCount.set(ch, pCount.get(ch) + 1);
      else
        pCount.set(ch, 1);
    }
    
   
    for (let i = 0; i < ns; i++) {
      let ch = s.charAt(i);
      
      if (sCount.has(ch))
        sCount.set(ch, sCount.get(ch) + 1);
      else
        sCount.set(ch, 1);
      
      if (i >= np) {
        let ch = s.charAt(i - np);
        
        if (sCount.get(ch) == 1)
          sCount.delete(ch);
        else
          sCount.set(ch, sCount.get(ch) - 1);
      }
      
      if (matches(pCount, sCount))
        output.push(i - np + 1);
    }
    return output;
  };