/**
 * @param {number} N
 * @return {number}
 */
// Time: O(N*2)
var fib = N => {
  if (N <= 1)
    return N;
  else
    return fib(N - 1) + fib(N - 2);
};

// Bottom-Up Approach using Memoization
var fib = N => {
  
  const memoize = N => {
    const cache = new Array(N + 1).fill(0);
    cache[1] = 1;
    
    for (let i = 2; i <= N; i++)
      cache[i] = cache[i - 1] + cache[i - 2];
    
    return cache[N]
  }
  
  if (N <= 1) {
    return N;
  }
  return memoize(N);
}

// Top-Down Approach using Memoization
var fib = N => {
  const memo = new Map();
  
  const fibonacci = n => {
    if (memo.has(n))
      return memo.get(n);
    
    let res = 0;
    if (n <= 1)
      res = n;
    else
      res = fibonacci(n - 1) + fibonacci(n - 2);
    
    memo.set(n, res);
    return memo.get(n);
  }
  
  return fibonacci(N);
}