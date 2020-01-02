/**
 * @param {character[][]} grid
 * @return {number}
 */
// Using DFS
const DFS = (grid, r, c) => {
  const nr = grid.length,
    nc = grid[0].length;

  if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == "0") return grid;

  grid[r][c] = "0";

  DFS(grid, r - 1, c);
  DFS(grid, r, c - 1);
  DFS(grid, r, c + 1);
  DFS(grid, r + 1, c);
  return grid;
};

const numIslands = function(grid) {
  if (!grid.length) return 0;

  const nr = grid.length,
    nc = grid[0].length;
  let numIslands = 0;

  for (let row = 0; row < nr; row++) {
    for (let col = 0; col < nc; col++) {
      if (grid[row][col] == "1") {
        numIslands++;
        grid = DFS(grid, row, col);
      }
    }
  }
  return numIslands;
};

// TODO
// Using BFS
const numIslands = function(grid) {};
