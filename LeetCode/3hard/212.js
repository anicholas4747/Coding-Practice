/*
212. Word Search II
Hard

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.



Example:

Input:
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]


Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.



 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// main function: while loop to go through the words 
// create ouput arr
// inside the while loop, iterate through the board 
// once we find the first char in each word, start using dfs
// if dfs return true: push the word in to output
// dfs: set the boudry(base case)
// create temp to store char in the board
// after we call dfs recursively in four dirs 
// put the the char back by using temp

// time: (the num of chars in the board) ^ words
// time: O(m * n * n) -> O(m*n^2)
// space: O(m+n)

var findWords = function (board, words) {
  let output = new Set();
  let i = 0;
  while (i < words.length) { // O(m)
    let word = words[i];
    for (let row = 0; row < board.length; row++) { // O(n)
      for (let col = 0; col < board[row].length; col++) {
        if (dfs(word, row, col, 0)) output.add(word); // O(n)
      }
    }
    i++;
  }

  return [...output];

  function dfs(word, row, col, idx) { // O(n)
    if (outOfBounds(row, col) || word[idx] !== board[row][col]) return false;
    if (idx >= word.length - 1) return true;

    let temp = board[row][col];
    board[row][col] = null;
    idx++;
    const result = dfs(word, row + 1, col, idx) ||
      dfs(word, row - 1, col, idx) ||
      dfs(word, row, col + 1, idx) ||
      dfs(word, row, col - 1, idx);

    board[row][col] = temp;
    return result;
  }

  function outOfBounds(row, col) {
    return row < 0 || row > board.length - 1 || col < 0 || col > board[row].length - 1;
  }
};