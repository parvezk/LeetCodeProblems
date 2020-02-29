/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
    if (n == 1 && k == 1) return "0";
    
    let seen = new Set(),
        ans = '';
    
    let sb = '';
    for (let i = 0; i < n - 1; i++)
      sb += '0';
    
    let start = sb;
    
    const dfs = (node, k) => {
      for (let x = 0; x < k; x++) {
        let nei = node + x;
        
        if (!seen.has(nei)) {
          seen.add(nei);
          dfs(nei.substring(1), k);
          ans += x;
        }
      }
    }
    
    dfs(start, k);
    ans += start;
    return ans;
  };