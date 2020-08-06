/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let result = letters.filter(c => c > target)
  if (result.length)
    return result[0];
  else
    return letters[0];
};