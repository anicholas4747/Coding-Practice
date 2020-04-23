// There is a new alien language which uses the latin alphabet.However, the order among letters are unknown to you.You receive a list of non - empty words from the dictionary, where words are sorted lexicographically by the rules of this new language.Derive the order of letters in this language.

// Example 1:
// Input:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// Output: "wertf"

// Input:
// [
  //   baa,
  //   abcd,
  //   abca,
  //   cab, 
  //   cad
  // ]
  // Output: "bdac"

class GraphNode {
  constructor(char){
    this.char = char;
    this.children = [];
  }
}
function alienDictionary (arr) {
  //create dummy is new node (next is first word, first char)
  let head = new GraphNode(arr[0][0]);
  let dummy = head;
  let longestWordLength = Math.max(...arr.map(el => el.length));
  generateGraph(arr, 0);

  function generateGraph (arr, idx) {
    if (idx === longestWordLength) return;
    // iterate through arr
    for (let i = 0; i < arr.length - 1; i++){

      // compare chars
      if (arr[i][idx] !== arr[i+1][idx]) {
        let node = new GraphNode(arr[i + 1][idx]);
        head.children.push(node);
        head = node;
      }
    }
    generateGraph(arr,idx+1);

  }
  console.log(dummy);

  // let res = "";
  // from dummy, traverse and build a str to then return
  // return res;
}

let wds = [
  "baa",
  "abcd",
  "abca",
  "cab", 
  "cad"
];
alienDictionary(wds);


// Example 2:
// Input:
// [
//   "z",
//   "x"
// ]
// Output: "zx"
// Example 3:
// Input:
// [
//   "z",
//   "x",
//   "z"
// ]
// Output: ""
// Explanation: The order is invalid, so return "".
//   Note:
// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.