/*
Given a 2D array of 0s and 1s representing islands, return the largest land mass.
An island is a mass of 1s surrounded by 0s in the NSEW directions.

Ex:
[
  [0,1,1],
  [1,0,1],
  [0,1,0]
] 
// => 3 [top right island]

[
  [1,1,1],
  [1,0,1],
  [1,1,0]
] 
// => 7 [C shaped island]
*/

function largestIsland (arr) {
  let largest = 0;

  for (let row = 0; row < arr.length; row++){
    for (let col = 0; col < arr[row].length; col++){
      if (arr[row][col] === 1) {
        largest = Math.max(largest, eraseIsland(row,col));
      }
    }
  }

  return largest;

  function eraseIsland (row,col) {
    if (row < 0 || row >= arr.length) return 0; // row out of bounds
    if (col < 0 || col >= arr[0].length) return 0; // col out of bounds
    if (arr[row][col] === 0) return 0; // value in cell is not land
    arr[row][col] = 0;

    let north = eraseIsland(row-1,col); // North
    let south = eraseIsland(row+1,col); // South
    let east = eraseIsland(row,col+1); // East
    let west = eraseIsland(row,col-1); // West

    return north + south + east + west + 1;
  }
}

let a = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 1, 0]
] // => 3

let b = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
] // => 7

let c = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1]
] // => 1

let d = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1]
] // => 3

let e = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
] // => 4

console.log(largestIsland(a)); // 3
console.log(largestIsland(b)); // 7
console.log(largestIsland(c)); // 1
console.log(largestIsland(d)); // 3
console.log(largestIsland(e)); // 4