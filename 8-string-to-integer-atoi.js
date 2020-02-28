/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  
  str = Number.parseInt(str);
  
  if (Number.isNaN(str))
    return 0;
  
  let range = 2 ** 31;
  let sign = Math.sign(str)
  
  if (str < 0 && str < -range)
    return -range;
  if (str > 0 && str >= range)
    return range - 1;
  
  return str;
};