/* 200. Number of Islands
Medium

Given a 2d grid map of '1's(land) and '0's(water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000
Output: 1

Example 2:
Input:
11000
11000
00100
00011
Output: 3
*/

var numIslands = function (grid) {
  //initialize a counter
  let count = 0;
  // initialize directions to check
  let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  // iterate through each cell on our grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      //if the cell is a 1 aka land, check off the entire island
      if (grid[row][col] === "1") {
        checkOffIsland(row, col);
        count++;
      }
    }
  }
  //return the counter
  return count;

  function checkOffIsland(row, col) {
    if (row < 0 || col < 0 ||
      row > grid.length - 1 || col > grid[row].length - 1 ||
      grid[row][col] === "0") return;

    grid[row][col] = "0";
    for (let i = 0; i < dirs.length; i++) {
      let [rowInc, colInc] = dirs[i];
      checkOffIsland(row + rowInc, col + colInc);
    }
  }
};