/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (wordlist, master) {

  const match = (a, b) => {
    let matches = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) == b.charAt(i)) matches++;
    }
    //console.log('matches', matches)
    return matches;
  }

  for (let i = 0, x = 0; i < 10 && x < 6; i++) {

    const count = new Map();
    for (let w of wordlist) {
      count.set(w, 0);
    }

    // guess the words with the least 0 matches
    for (let w1 of wordlist) {
      for (let w2 of wordlist) {
        if (match(w1, w2) == 0) {
          count.set(w1, count.get(w1) + 1);
        }
      }
    }

    // search through wordlist to find words that has most non-zero matches (least minimum 0 matches)
    let minimax = [wordlist[0], 1000];
    for (let w of wordlist) {
      if (count.get(w) <= minimax[1])
        minimax = [w, count.get(w)];
    }

    let guess = minimax[0];
    let x = master.guess(guess);
    const wordlist2 = [];

    for (let w of wordlist) {
      if (match(guess, w) == x)
        wordlist2.push(w);

      wordlist = wordlist2;
    }
  }
  return wordlist;
}