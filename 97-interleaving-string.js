/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// DP - Using 2D Dynamic Programming 2

// DP - Using Recursion with Memoization Approach 1
const is_Interleave = (s1, i, s2, j, s3, k, memo) => {

    if (i == s1.length)
      return s2.substring(j) == s3.substring(k);
  
    if (j == s2.length) 
      return s1.substring(i) == s3.substring(k);
  
    if (memo[i][j] >= 0)
      return memo[i][j] == 1 ? true : false;
  
    let ans = false;
    //console.log(s1.substring(0, i), s2.substring(0, j))
    if (s3.charAt(k) == s1.charAt(i) && is_Interleave(s1, i + 1, s2, j, s3, k + 1, memo)
                  || s3.charAt(k) == s2.charAt(j) && is_Interleave(s1, i, s2, j + 1, s3, k + 1, memo))
      ans = true;
    
    memo[i][j] = ans ? 1 : 0;
    return ans;
    
  }
  
  var isInterleave = function(s1, s2, s3) {
    
    const memo = new Array(s1.length)
    for (let i=0; i<s1.length; i++) {
        memo[i] = [];
        for (let j=0; j<s2.length; j++)
          memo[i][j] = -1;
    }
      
    return is_Interleave(s1, 0, s2, 0, s3, 0, memo);
  };