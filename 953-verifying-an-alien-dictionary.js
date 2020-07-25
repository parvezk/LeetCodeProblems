/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i],
          word2 = words[i + 1],
          done = false;
      
      for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
        if (done) continue
        if (word1.charAt(k) != word2.charAt(k)) {
          if (order.indexOf(word1.charAt(k)) < order.indexOf(word2.charAt(k)))
            done = true;
          else if (order.indexOf(word1.charAt(k)) > order.indexOf(word2.charAt(k)))
            return false;
        }
      }
      
      if (word1.length > word2.length && !done)
        return false
    }
    return true;
  };