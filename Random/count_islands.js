/*
Given a 2D array of 0s and 1s, return the total number of islands.
An island is a mass of 1s surrounded by 0s in the NSEW directions.

Ex:
[
  [0,1,1],
  [1,0,1],
  [0,1,0]
] // => 3 islands

[
  [1,1,1],
  [1,0,1],
  [1,1,0]
] // => 1 island
*/

function countIslands (arr) {
  let count = 0;

  for (let row = 0; row < arr.length; row++){
    for (let col = 0; col < arr[row].length; col++){
      if (arr[row][col] === 1) {
        eraseIsland(row,col);
        count++;
      }
    }
  }

  return count;

  function eraseIsland (row,col) {
    if (row < 0 || row >= arr.length) return; // row out of bounds
    if (col < 0 || col >= arr[0].length) return; // col out of bounds
    if (arr[row][col] === 0) return; // value in cell is not land
    arr[row][col] = 0;

    eraseIsland(row-1,col); // North
    eraseIsland(row+1,col); // South
    eraseIsland(row,col+1); // East
    eraseIsland(row,col-1); // West
  }
}

let a = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 1, 0]
] // => 3 islands

let b = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
] // => 1 island

let c = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1]
] // => 5 islands

let d = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1]
] // => 2 island

console.log(countIslands(a)); // 3
console.log(countIslands(b)); // 1
console.log(countIslands(c)); // 5
console.log(countIslands(d)); // 2