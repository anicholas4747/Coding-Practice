var longestIncreasingPath = function (matrix) {
  // counter w length of longest path
  let maxLength = 0;
  // dfs in all directions to determine which paths are strictly increasing and figure out their length
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // reassign max if larger than current
      maxLength = Math.max(maxLength, dfs(row, col));
    }
  }
  // return counter
  return maxLength;

  function dfs(row, col, memo = {}) {
    let currCell = matrix[row][col];
    let maxPath = 1;

    if (memo[row + "-" + col] === undefined) {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          // skip diagonals
          if ((i + j) % 2 === 0 && (row > 0 && col > 0)) continue;
          // if (Math.abs(i) - Math.abs(j) === 0) continue;
          // skip out of bounds
          if (row + i < 0 || col + j < 0 || row + i >= matrix.length || col + j >= matrix[0].length) {
            continue;
          } else {
            // compare valid cells
            let nextCell = matrix[row + i][col + j];
            if (nextCell > currCell) {
              // continue search if connected cell is larger
              maxPath = Math.max(maxPath, dfs(row + i, col + j, memo) + 1);
            }
          }
        }
      }
    }
    memo[row + "-" + col] = maxPath;
    return memo[row + "-" + col];
  }
};

let arr = [
  [7, 8, 9],
  [9, 7, 6],
  [7, 2, 3]
] //=> 6

console.log(longestIncreasingPath(arr));