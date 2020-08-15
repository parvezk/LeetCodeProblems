/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  
    const HashMap = new Map(),
          indices = [];
    
    for (let i=0; i<numbers.length; ++i)
    {
      let compliment = target - numbers[i];
      if (HashMap.has(compliment)) {
        indices.push(HashMap.get(compliment) + 1)
        indices.push(i + 1)
      } else {
        HashMap.set(numbers[i], i)
      }
    }
    return indices;
  };