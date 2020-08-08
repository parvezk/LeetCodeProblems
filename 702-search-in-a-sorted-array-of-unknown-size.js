/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */

/* // LINEAR APPROACH
var search = function (reader, target) {
  let found = false;
  let i = 0;
  
  while (!found) {
    let val = reader.get(i);

    if (val == target) return i;
    
    if (val < target) i++;
    else found = true;
  }
  return -1;
};
*/

// LOGARITHMIC APPROACH
var search = function (reader, target) {
  if (reader.get(0) == target) return 0;
  
  let left = 0,
      right = 1;
  
  while (reader.get(right) <= target)
  {
    left = right;
    right <<= 1;
  }

  while (left <= right)
  {
    let pivot = left + ((right - left) >> 1);
    let num = reader.get(pivot);

    if (num == target) return pivot;
    else if (num < target) left = pivot + 1;
    else right = pivot - 1;
  }
  
  return -1;
  
};