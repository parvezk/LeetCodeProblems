/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    if (S.length == 1 && !S.includes('-'))
        return S.toUpperCase();
    
    S = S.replace(/-/ig, '');
    
    let ans = '',
        mod = S.length % K;
    
    if (mod) {
      ans += S.slice(0, mod) + '-';
      S = S.slice(mod);
    }
    
    for (let i = 0; i < S.length; i = i + K) {
      if (i != 0) ans += '-';
      ans += S.substring(i, i + K);
    }
    return ans.toUpperCase();
  };