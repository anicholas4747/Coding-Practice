// Given a matrix of m x n elements(m rows, n columns), return all elements of the matrix in spiral order.

function spiralMatrix(board) {
  if(board.length === 0) return [];
  //initialize a new arr
  let resArr = [];
  let dirs = ["r", "d", "l", "u"];
  // call helper function on board[0][0]
  fillArr(0, 0, 0);
  // return new arr
  return resArr;

  // helper(row,col,dirIdx)
  function fillArr(row, col, dirIdx) {
    // if this cell is not in the board, return false
    if(row < 0 || col < 0 || row >= board.length || col >= board[row].length) return;
    if(board[row][col] === false) return;
    // add that val to the output
    resArr.push(board[row][col]);
    // set the board at that pos to be null
    board[row][col] = false;

    // if all four directions are false, return
    let count = 0;
    while(count !== 4) {
      if (dirs[dirIdx] === "r") {
        fillArr(row, col + 1, dirIdx);
      } else if (dirs[dirIdx] === "d") {
        fillArr(row + 1, col, dirIdx);
      } else if (dirs[dirIdx] === "l") {
        fillArr(row, col - 1, dirIdx);
      } else if (dirs[dirIdx] === "u") {
        fillArr(row - 1, col, dirIdx);
      }

      count++;
      dirIdx = (dirIdx + 1) % 4;
    }
  }
}
/*
Example 1:
Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
*/

console.log(spiralMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

console.log(spiralMatrix([
  [1,   2,  3,  4],
  [5,   6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16],
]));