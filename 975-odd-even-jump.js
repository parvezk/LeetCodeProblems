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
    
    B = sortFn(A, sortFn1);
    let oddnext = make(B);
    B = sortFn(A, sortFn2);
    let evennext = make(B);
    
    let odd = new Array(N).fill(false),
        even = new Array(N).fill(false);
    odd[N - 1] = even[N - 1] = true;
    
    for (let i = N - 2; i >= 0; i--) {
      if (oddnext[i]) odd[i] = even[oddnext[i]];
      if (evennext[i]) even[i] = odd[evennext[i]];
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