/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const DFS = (board, r, c, word, index, visited) => {
  const nr = board.length,
    nc = board[0].length;

  if (index == word.length) return true;

  if (r < 0 || c < 0 || r >= nr || c >= nc) return false;

  if (visited[r][c]) return false;

  if (board[r][c] != word.charAt(index)) return false;

  visited[r][c] = true;

  if (
    DFS(board, r, c - 1, word, index + 1, visited) ||
    DFS(board, r - 1, c, word, index + 1, visited) ||
    DFS(board, r, c + 1, word, index + 1, visited) ||
    DFS(board, r + 1, c, word, index + 1, visited)
  )
    return true;

  visited[r][c] = false;
  return false;
};

const exist = (board, word) => {
  const nr = board.length,
    nc = board[0].length;

  const visited = new Array(nr);
  for (let i = 0; i < visited.length; i++)
    visited[i] = new Array(nc).fill(false);

  for (let row = 0; row < nr; row++) {
    for (let col = 0; col < nc; col++) {
      if (board[row][col] == word.charAt(0)) {
        if (DFS(board, row, col, word, 0, visited)) return true;
      }
    }
  }
  return false;
};
