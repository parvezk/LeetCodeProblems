/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const res = [], n = num.length;
    if (n == 0) return res;
    
    const helper = (num, path, res, target, start, cur, prev) => {
      if (start == num.length) {
        if (cur == target) res.push(path);
        return;
      }
      
      for (var i = start; i < num.length; i++) {
        if (i != start && num.charAt(start) == '0') break;
        let tmp = Number.parseInt(num.substring(start, i + 1));
        
        if (start == 0)
          helper(num, tmp.toString(), res, target, i+1, tmp, tmp)
        else {
          helper(num, path + '+' + tmp, res, target, i + 1, cur + tmp, tmp);
          helper(num, path + '-' + tmp, res, target, i + 1, cur - tmp, -tmp);
          helper(num, path + '*' + tmp, res, target, i + 1, cur - prev + prev * tmp, prev * tmp);
        }
      }
    }
    
    helper(num, '', res, target, 0, 0, 0);
    return res;
  };