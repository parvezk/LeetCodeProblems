/**
 * @param {string} s
 * @return {string}
 */
// DP approach
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    
    let n = s.length, L = new Array(n);
    
    // Initialize a nxn matrix L with ''
    for (let i = 0; i < n; i++)
      L[i] = new Array(n).fill('');
    
    // Fill the diagnol line
    for (let j = 0; j < n; j++)
      L[j][j] = s[j];
    
    // Fill the dependency graph (sub problem graph)
    let k = 1;
    while (k < n) {
      let i = 0, j = k;
      
      while (j < n) {
        
        if (L[i + 1][j - 1].length == j - i - 1 && s[i] == s[j])
          L[i][j] = s.substring(i, j + 1);
        else if (L[i + 1][j].length > L[i][j - 1].length)
          L[i][j] = L[i + 1][j];
        else
          L[i][j] = L[i][j - 1];
        
        i = i + 1;
        j = j + 1;
      }
      k = k + 1;
    }
    
    // Top-right of dependency graph/ table has answer
    return L[0][n - 1];
  };