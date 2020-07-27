/**
 * @param {number[]} A
 * @return {number}
 */

  //TreeMap higher and lower keys
  var lowerKey = (arr, v) => {
    let min = Number.MIN_SAFE_INTEGER, t = min;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < v && arr[i] >= t)
            t = arr[i];
    }
    return (t == min) ? null : t;
}

var higherKey = (arr, v) => {
    let max = Number.MAX_SAFE_INTEGER, t = max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > v && arr[i] <= t)
            t = arr[i];
    }
    return (t == max) ? null : t;
}
// Approach 2: Tree Map
var oddEvenJumps = function(A) {
  let N = A.length;
  if (N <= 1) return N;
   const odd = new Array(N).fill(false),
         even = new Array(N).fill(false);
   odd[N-1] = even[N-1] = true;
   
   let map = new Map();
   map.set(A[N-1], N-1);
   
   for (let i = N-2; i >= 0; --i) {
       let v = A[i];
       
       if(map.has(v)) {
           odd[i] = even[map.get(v)];
           even[i] = odd[map.get(v)];
       } else {
           
           let keys = [...map.keys()],
               lower = lowerKey(keys, v),
               higher = higherKey(keys, v);
           
           if (lower != null)
               even[i] = odd[map.get(lower)];
           if (higher != null)
               odd[i] = even[map.get(higher)];
       }
       map.set(v, i);
   }
   
   let ans = 0;
   for (let b of odd) if (b) ans++;
   return ans;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  let N = A.length;
  
  const sortFn1 = (a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : a[1] == b[1] ? (a[0] < b[0] ? -1 : 1) : 0;
  const sortFn2 = (a, b) => a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : a[1] == b[1] ? (a[0] < b[0] ? -1 : 1) : 0;
  
  const sortFn = (arr, fn) => {
    let map = new Map();
    arr.map((item, i) => map.set(i, item));
    map = new Map([...map.entries()].sort(fn));
    return [...map.keys()];
  }
  
  const make = B => {
    let ans = new Array(N).fill(null),
        stack = [];

    for (let i of B) {
      while (stack.length > 0 && i > stack[stack.length - 1])
        ans[stack.pop()] = i
      stack.push(i);
    }
    return ans;
  }
  
  let oddnext = make(sortFn(A, sortFn1));
  let evennext = make(sortFn(A, sortFn2));
  
  let odd = new Array(N).fill(false),
      even = new Array(N).fill(false);
  odd[N - 1] = even[N - 1] = true;
  
  for (let i = N - 2; i >= 0; i--) {
    if (oddnext[i]) 
      odd[i] = even[oddnext[i]];
    if (evennext[i]) 
      even[i] = odd[evennext[i]];
  }

  return odd.reduce((accum, e) => accum += e)
};

/*
[81,54,96,60,58]
[10,13,12,14,15]
[2,3,1,1,4]
[5,1,3,4,2]
[1,2,3,2,1,4,4,5]
[2,96,18,12,21,80,93,2,42,10,25,22,64,35,18,50,3,10,98,19]
*/