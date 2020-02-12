
/*
[81,54,96,60,58]
[10,13,12,14,15]
[2,3,1,1,4]
[5,1,3,4,2]
[1,2,3,2,1,4,4,5]
*/

// Time Limit Exceeded
var oddEvenJumps = function(A) {
    let n = A.length, 
          TreeMap = new Map();
    let res = 1,
        higher = new Array(n).fill(false),
        lower = new Array(n).fill(false);
    
    higher[n - 1] = lower[n - 1] = true;
    TreeMap.set(A[n - 1], n - 1);
    
    const sortFn1 = (a, b) => a[0] - b[0];
    const sortFn2 = (a, b) => b[0] - a[0];
    
    for (let i = n - 2; i >= 0; i--) {
      let hi = Array.from(TreeMap.entries()).find(n => n[0] >= A[i]),
          lo = Array.from(TreeMap.entries()).reverse().find(n => n[0] <= A[i]);
      //console.log(lo)
      if (hi) higher[i]  = lower[hi[1]];
      if (lo) lower[i] = higher[lo[1]];
      
      if (higher[i]) res++;
      TreeMap.set(A[i], i);
      TreeMap = new Map([...TreeMap.entries()].sort(sortFn1))
      
    }
    return res;
  };