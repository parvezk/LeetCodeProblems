/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  if (n == 1 && k == 1) return '0';
  
  let seen = new Set(), ans = '',
      start = '0'.repeat(n - 1);
  
  const dfs = (node, k) => {
    
    for (let i = 0; i < k; i++) {
      let nei = node + i;
      
      if (!seen.has(nei)) {
        seen.add(nei);
        
        dfs(nei.substring(1), k);
        ans += i;
      }
    }
  }
  
  dfs(start, k);
  ans += start;
  return ans;
};