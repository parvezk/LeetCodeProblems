/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let j = 0; j < J.length; j++) {
    for (let s = 0; s < S.length; s++) {
      if (J.charAt(j) == S.charAt(s))
        count++;
    }
  }
  return count;
};

var numJewelsInStones = function(J, S) {
    let jewels = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (J.includes(S.charAt(i)))
            jewels++;
    }
    return jewels;
};

var numJewelsInStones = function(J, S) {
    const HashTable = new Map();
    for (let jewel of J)
        HashTable.set(jewel, 0);
    
    for (let stone of S) {
        if (HashTable.has(stone)) 
            HashTable.set(stone, HashTable.get(stone) + 1);
    }
    
    return [...HashTable.values()].reduce((accum, val) => accum += val);
}