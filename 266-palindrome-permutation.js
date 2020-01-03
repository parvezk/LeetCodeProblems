/**
 * @param {string} s
 * @return {boolean}
 */
// Using hash set
var canPermutePalindrome = function(s) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let c of s) {
    if (unpairedCharacters.has(c)) unpairedCharacters.delete(c);
    else unpairedCharacters.add(c);
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
};

// Other approaches:
// Using Hash map; Single pass using array; double pass using array;
