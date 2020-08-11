/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation
var multiply = function(num1, num2) {
  let m = num1.length, n = num2.length,
      val = new Array(m + n).fill(0);
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = num1.charAt(i) * num2.charAt(j),
          sum = mul + val[i + j + 1];
      
      val[i + j] += Math.trunc(sum / 10);
      val[i + j + 1] = sum % 10;
    }
  }
  // skip the leading zeros
  while (val[0] === 0) val.shift();
  return val.length ? val.join('') : '0';
};