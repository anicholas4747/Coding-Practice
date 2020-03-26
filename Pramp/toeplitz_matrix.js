// Toeplitz Matrix
// A Toeplitz matrix is a matrix where every left - to - right - descending diagonal 
// has the same element.Given a non - empty matrix arr, write a function that returns 
// true if and only if it is a Toeplitz matrix.
// The matrix can be any dimensions, not necessarily square.

// For example,
// [
//   [1,2,3,4],
//   [7,1,2,3],
//   [8,7,1,2]
// ]
// is a Toeplitz matrix, so we should return true, while
// [
//   [1,2,3],
//   [1,2,3],
//   [1,2,1]
// ]
// isn’t a Toeplitz matrix, so we should return false.

function tMatrix(arr){
  // check first row
  for(let i = 0; i < arr[0].length; i++){
    let runningRow = 0;
    let runningCol = i;

    let curNum = arr[0][i];
    let nextDiag = arr[runningRow][runningCol];

    while (runningRow < arr.length - 1 && runningCol < arr[runningRow].length - 1){
      if (curNum !== nextDiag) return false;
      runningRow++;
      runningCol++;
      nextDiag = arr[runningRow][runningCol];
    }
  }
  // check first column
  for(let i = 0; i < arr.length; i++){
    let runningRow = i;
    let runningCol = 0;

    let curNum = arr[i][0];
    let nextDiag = arr[runningRow][runningCol];

    while (runningRow < arr.length - 1 && runningCol < arr[runningRow].length - 1){
      if (curNum !== nextDiag) return false;
      runningRow++;
      runningCol++;
      nextDiag = arr[runningRow][runningCol];
    }
  }

  return true;
}

let a = [
  [1,2,3,4],
  [7,1,2,3],
  [8,7,1,2]
];

let b = [
  [1,2,3],
  [1,2,3],
  [1,2,1]
];

console.log(tMatrix(a)); // true
console.log(tMatrix(b)); // false