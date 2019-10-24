/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, N) {
  
  const fastPow = (x, n) => {
    if (n == 0)
      return 1.0;
    
    let half = fastPow(x, Math.trunc(n / 2));
    
    if (n % 2 == 0)
      return half * half;
    else
      return half * half * x;
  }
  
  if (N < 0) {
    x = 1 / x;
    N = -N
  }
  
  return fastPow(x, N);
};
