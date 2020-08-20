/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(trees) {
  const map = new Map();
  let basket = new Set([trees[0]]);
  
  let startIndex = 0, fruitCount = 1,
      prev = trees[0], curr;
  
  for (let i = 1; i < trees.length; i++) {
    curr = trees[i];
    basket.add(curr);
    
    if (basket.size > 2) {
      map.set(startIndex, fruitCount);
      fruitCount = 0;
      
      let before = i - 1;
      while (trees[before] == prev) {
        fruitCount++;
        before--;
      }
      
      startIndex = i - 1;
      basket = new Set([prev, curr])
    }
    
    prev = curr;
    fruitCount++;
  }
  map.set(startIndex, fruitCount);
  return Math.max(...map.values());
};