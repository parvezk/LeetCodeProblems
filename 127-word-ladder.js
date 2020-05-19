/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  
  const allComboDict = new Map(),
        L = beginWord.length;
  
  wordList.forEach(word => {
    for (let i = 0; i < L; i++) {  
      let newWord = word.substring(0, i) + '*' + word.substring(i + 1),
          transformations = allComboDict.has(newWord) ? allComboDict.get(newWord) : [];
    
      allComboDict.set(newWord, [...transformations, word]);
    }
  });
  
  // Queue for BFS
  let Q = [], visited = new Set();
  visited.add(beginWord);
  Q.push([beginWord, 1]);
  
  while (Q.length) {
    let node = Q.shift(), word = node[0], level = node[1];
    for (let i = 0; i < L; i++) {
      let newWord = word.substring(0, i) + '*' + word.substring(i + 1);
      
      for (let next of (allComboDict.get(newWord) || [])) {
        if (next == endWord) return level + 1;
        
        if (!visited.has(next)) {
          visited.add(next);
          Q.push([next, level + 1]);
        }
      }
    }
  }
        
  return 0;
};