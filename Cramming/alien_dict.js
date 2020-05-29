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

function alienDict (words) {
  let uniqueChars = new Set(words.join("").split(""));
  let adjList = buildRelationships(); // {this: isAfterThis}

  let order = "";
  let q = charsWithNothingBeforeThem(); // [chars];
  while (q.length > 0) {
    let curr = q.shift();
    order += curr;
    discardChar(curr);
    q = charsWithNothingBeforeThem();
  }
  return (order.length === uniqueChars.size) ? order : "";

  function buildRelationships () {
    let hash = {};
    for (let char of uniqueChars) {
      hash[char] = new Set();
    }

    for (let i = 1; i < words.length; i++) {
      let w1 = words[i-1];
      let w2 = words[i];
      let idx = 0;
      while (w1[idx] === w2[idx]) {
        idx++;
      }
      hash[w2[idx]].add(w1[idx]);
    }
    return hash;
    /*
      {
        a: Set{b,d},
        b: Set{},
        c: Set{a},
        d: Set{b}
      }
    */
  }
  function charsWithNothingBeforeThem () {
    let arr = [];
    for (let key in adjList) {
      if (adjList[key].size === 0) arr.push(key);
    }
    return arr;
  }
  function discardChar (char) {
    for (let key in adjList) {
      if (key === char) {
        delete adjList[key];
      } else {
        adjList[key].delete(char);
      }
    }
  }
}

let w1 = ["wrt","wrf","er","ett","rftt"];
console.log(alienDict(w1) === "wertf", "wertf");

let w2 = ["baa","abcd","abca","cab","cad"];
console.log(alienDict(w2) === "bdac", "bdac");

let w3 = ["z","x"];
console.log(alienDict(w3) === "zx", "zx");

let w4 = ["z","x","z"];
console.log(alienDict(w4) === "", "");

// Input:
// [
  //   baa,
  //   abcd,
  //   abca,
  //   cab, 
  //   cad
  // ]
  // Output: "bdac"

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