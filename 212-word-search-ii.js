/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const DFS = (board, r, c, word, index, visited) => {
    const nr = board.length, nc = board[0].length;
    
    if (index == word.length) return true;
    
    if (r < 0 || c < 0 || r >= nr || c >= nc)
      return false;
    
    if (visited[r][c]) return false
        
    if (board[r][c] != word.charAt(index)) return false;
    
    visited[r][c] = true;
    
    if (DFS(board, r, c - 1, word, index + 1, visited) ||
        DFS(board, r - 1, c, word, index + 1, visited) ||
        DFS(board, r, c + 1, word, index + 1, visited) ||
        DFS(board, r + 1, c, word, index + 1, visited))
    return true;
    
    visited[r][c] = false;
    return false;
  }
  
  var findWords = function(board, words) {
      const nr = board.length, nc = board[0].length,
            ans = new Set();
    
    for (const word of words) {
      for (let row = 0; row < nr; row++) {
        for (let col = 0; col < nc; col++) {
          
          if (board[row][col] == word.charAt(0)) {
            
            const visited = new Array(nr).fill(null).map(
              () => new Array(nc).fill(false));
            
            if (DFS(board, row, col, word, 0, visited))
              ans.add(word);
          }
        }
      }
    }
    // return Array.from(ans);
    return [...ans.values()]
  };