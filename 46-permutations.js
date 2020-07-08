/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const helper = (elems) => {
    if (elems.length == 1)
      return [elems];
   
    else {
      const first = elems.shift();
      let remains = helper(elems);
      let arr = [];
      for (let p of remains) {
        for (let pos = 0; pos <= p.length; pos++) {
          const copy = p.slice();
          copy.splice(pos, 0, first)
          arr.push(copy);
        }
      }
      return arr;
    }
  }
  
  const permute = (elems) => {
    return helper(elems, [])
  }



const helper = (elems) => {
    if (elems.length == 1)
      return [elems];
   
    else {
      const first = elems.shift();
      let remains = helper(elems);
      let arr = [];
      for (let p of remains) {
        for (let pos = 0; pos <= p.length; pos++) {
          const permutation = [...p.slice(0, pos), first, ...p.slice(pos)];
          arr.push(permutation)
        }   
      }
      return arr;
    }
  }
  
  const permute = (elems) => {
    return helper(elems, [])
  }



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (elem) => {
  const generate_permutation = (i, sol) => {
    // Base Case
    if (i == elem.length)
      collection.push(sol) // Complete Solution
    else { // Generate candidate elements
      for (let k = 0; k < elem.length; k++) { 
        //# Check candidate validity
        if (!sol.slice(0, i).includes(elem[k])) {
          // Include candidate in partial solution
          sol[i] = elem[k];
          //Expand partial solution at position i+1
          generate_permutation(i + 1, sol.slice());
        }
      }
    }
  }

  const collection = [];
  generate_permutation(0, []);
  return collection;
}