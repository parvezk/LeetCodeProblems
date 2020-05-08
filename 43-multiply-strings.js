/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation
var multiply = function(num1, num2) {
    let m = num1.length, n = num2.length;
    let pos = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        let mul = parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));      
        let p1 = i + j, p2 = i + j + 1;
        let sum = mul + pos[p2];
        
        pos[p1] += parseInt(sum / 10);
        pos[p2] = (sum) % 10;
      }
    }
    
    let sb = '';
    for (let p of pos) if (!(sb.length == 0 && p == 0)) sb += p;
    return sb.length == 0 ? '0' : sb.toString();
  };