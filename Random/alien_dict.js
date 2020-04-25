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

function alienDictionary (arr) {
  let graph = createGraph(arr); // {b:[a,d], d:[a], a:[c]} where String: Set
  let indegrees = createIndegrees(arr, graph); // {b:0, a:2,d:1, c:1}
  
  let res = "";
  let queue = [];
  for (let key in indegrees) {
    if (indegrees[key] === 0) queue.push(key);
  }

  while (queue.length > 0) {
    let curr = queue.shift();
    res += curr;

    if (graph[curr] !== undefined) {
      graph[curr].forEach(kid => {
        indegrees[kid]--;
        if (indegrees[kid] === 0) queue.push(kid);
      });
    }
  }
  
  return (res.length === Object.keys(indegrees).length) ? res : "";

  function createGraph(arr){
    let adjHash = {};
    for (let i = 0; i < arr.length - 1; i++){
      let w1 = arr[i];
      let w2 = arr[i+1];

      let charIdx = 0;
      while (charIdx < Math.min(w1.length, w2.length)) {
        if (w1[charIdx] !== w2[charIdx]) {
          if (adjHash[w1[charIdx]] === undefined) adjHash[w1[charIdx]] = new Set();
          adjHash[w1[charIdx]].add(w2[charIdx]);
          break;
        }
        charIdx++;
      }
    }
    return adjHash;
  }

  function createIndegrees(arr, graph){
    let pointersHash = {};

    Object.keys(graph).forEach(key => {
      if (pointersHash[key] === undefined) pointersHash[key] = 0;

      graph[key].forEach(kid => {
        if (pointersHash[kid] === undefined) {
          pointersHash[kid] = 1;
        } else {
          pointersHash[kid]++;
        }
      });
    });

    return pointersHash;
  }
}
let wds = [
  "baa",
  "abcd",
  "abca",
  "cab", 
  "cad"
];
console.log(wds, alienDictionary(wds));

wds = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
];
console.log(wds, alienDictionary(wds));

wds = [
  "z",
  "x"
];
console.log(wds, alienDictionary(wds));

wds = [
  "z",
  "x",
  "z"
];
console.log(wds, alienDictionary(wds));

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