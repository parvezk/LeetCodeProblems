/**
 * @param {number} n
 * @return {string[]}
 */

const numdef = (n, len) => {
    if (n == 0) return [""];
    if (n == 1) return ["1", "0", "8"];
    
    let middles = numdef(n - 2, len),
        result = [];
    
    for (let middle of middles) {
      if (n != len)
        result.push("0" + middle + "0");
      
      result.push("8" + middle + "8");
      result.push("1" + middle + "1");
      result.push("9" + middle + "6");
      result.push("6" + middle + "9");
    }
    return result;
  }
  
  var findStrobogrammatic = function(n) {
    return numdef(n, n);
  };