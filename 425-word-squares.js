// APPROACH 1
/**
 * @param {string[]} words
 * @return {string[][]}
 */

class Solution {
    constructor (words) {
      this.words = words;
      this.N = words[0].length;
      this.results = [];
    }
    
    wordSquares() {
      let word_squares = [];
      for (let word of this.words) {
        word_squares = [word]
        this.backtracking(1, word_squares);
      }
      return this.results;
    }
    
    backtracking(step, word_squares) {
      //console.log(step, word_squares, this.results)
      if (step == this.N) {
        this.results.push(word_squares.slice())
        return;
      }
      
      let prefix = '';
      for (let word of word_squares)
        prefix += word.charAt(step)
      
      let prefixWords = this.words.filter(word => word.startsWith(prefix))
      
      for (let candidate of prefixWords) {
        word_squares.push(candidate)
        this.backtracking(step + 1, word_squares);
        word_squares.pop();
      }
    
      return this.results;
    }
  }
  //
  var wordSquares = function(words) {
    const sol = new Solution(words);
    return sol.wordSquares();
  };

  // APPROACH 2

  /**
 * @param {string[]} words
 * @return {string[][]}
 */
class Solution {
  
    constructor(words) {
      this.words = words;
      this.N = words[0].length;
      this.prefixHashTable = null;
      this.results = []
    }
    
    wordSquares(words) {
      this.buildPrefixHashTable(words);
      
      for (let word of this.words)
        this.backtracking(1, [word]);
      
      return this.results;
    }
    
    backtracking(step, word_squares) {
      if (step == this.N) {
        this.results.push(word_squares.slice())
        return;
      }
      
      let prefix = '';
      for (let word of word_squares)
        prefix += word.charAt(step);
      
      for (let candidate of this.getWordsWithPrefix(prefix)) {
        word_squares.push(candidate)
        this.backtracking(step + 1, word_squares);
        word_squares.pop();
      }
    }
    
    buildPrefixHashTable() {
      this.prefixHashTable = new Map();
      
      for (let word of this.words) {
        for (let i = 0; i < this.N; i++) {
          
          let prefix = word.substring(0, i);
          let wordList = this.prefixHashTable.get(prefix);
          
          if (wordList == null) {
            wordList = [word];
            this.prefixHashTable.set(prefix, wordList)
          } else {
            wordList.push(word);
          }
        }
      }
    }
    
    getWordsWithPrefix(prefix) {
      let wordList = this.prefixHashTable.get(prefix);
      return wordList != null ? wordList : [];
    }
  }
  
  var wordSquares = function(words) {
    const sol = new Solution(words);
    return sol.wordSquares();
  };