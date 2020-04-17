function sudokuSolve(board) {
  // your code goes here
  // check preset numbers
  // new Array(9).fill({})

  let rowHashes = new Array(9).fill().map(() => new Set()); //9 * 9 => 81 => 3 Hashes
  let colHashes = new Array(9).fill().map(() => new Set()); //9 * 9 => 81
  let tbtHashes = new Array(9).fill().map(() => new Set()); //9 * 9 => 81

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let cell = board[row][col];
      let subSquare = (Math.floor(row / 3) + 1) * Math.floor(col / 3)

      if (cell === ".") continue

      if (rowHashes[row].has(cell) || colHashes[col].has(cell) || tbtHashes[subSquare].has(cell)) {
        return false
      }
      rowHashes[row].add(cell);
      colHashes[col].add(cell);
      tbtHashes[subSquare].add(cell);     // % 3 => 5, 2+2 => 4  
    }
  }

  return solveSudoku()

  function solveSudoku() {
    for (let i = 0; board.length > i; i++) {
      for (let j = 0; board.length > j; j++) {
        if (board[i][j] != ".") continue
        for (let num = 1; 9 >= num; num++) { //num = 4
          if (validNum(i, j, num)) { // board[1][4] => 1
            board[i][j] = num
            let subSquare = (Math.floor(i / 3) + 1) * Math.floor(j / 3)
            rowHashes[i].add(num)
            colHashes[j].add(num)
            tbtHashes[subSquare].add(num) ////5, 3, 4, 5, ......
            solveSudoku()             //
            //Code block here
            rowHashes[i].delete(num)
            colHashes[j].delete(num)
            tbtHashes[subSquare].delete(num)
            board[i][j] = "."
          }
        }
        return board[i][j]
      }
    }
    console.log("false")
    return false
  }

  function validNum(i, j, num) {
    if (rowHashes[i].has(num)) return false
    if (colHashes[j].has(num)) return false
    let subsquare = (Math.floor(i / 3) + 1) * Math.floor(j / 3);
    if (tbtHashes[subsquare].has(num)) return false
    return true
  }

  //5,3,4,.,7....
  //6,.,.,1,9,5


  //Time Complexity: NP-Hard => Optimal Solution, brute force
  //
}

sudokuSolve([[".", ".", ".", "7", ".", ".", "3", ".", "1"], ["3", ".", ".", "9", ".", ".", ".", ".", "."], [".", "4", ".", "3", "1", ".", "2", ".", "."], [".", "6", ".", "4", ".", ".", "5", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", "1", ".", ".", "8", ".", "4", "."], [".", ".", "6", ".", "2", "1", ".", "5", "."], [".", ".", ".", ".", ".", "9", ".", ".", "8"], ["8", ".", "5", ".", ".", "4", ".", ".", "."]])

 //rowHash[0] => [5,3,".",7]

  // row[0] => 4
  // 4 => false
  //


  // subSquare => Math formula
  // 0

  // board[1][4] => 1 * 1 => 1
  // (Math.floor(i/3)+1) * Math.floor(j/3) =>
  // 
  // board[1][4] => Math.floor(i/3) => 0 * 1 => 0

  // 0,0 -> 2,2 | 0,3 -> 2,5 | 0,6 -> 2,8
  // ------------------------------------
  // 3,0 -> 5,2 | 
  // 3
  ///////////////////////////////
  //                           6,6 => 8,8
  //board[5][4] = 9

  // ".........."

  //board[0][j]

  // actually solve sudoku

  //return bool

// Time Complexity:
// Space Complexity: 
//