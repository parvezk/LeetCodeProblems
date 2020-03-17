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