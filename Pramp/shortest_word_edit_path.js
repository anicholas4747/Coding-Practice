// Shortest Word Edit Path
// Given two words source and target, and a list of words, find the length of the 
// shortest series of edits that transforms source to target.
// Each edit must change exactly one letter at a time, 
// and each intermediate word(and the final target word) must exist in words.
// If the task is impossible, return -1.

// Examples:

// source = "bit", target = "dog"
// words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
// output: 5
// explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

// source = "no", target = "go" words = ["to"]
// output: -1

function shortestPath (w1,w2,words) {
  if (!words.includes(w2)) return -1;
  
  let dist = 0;
  let queue = [[w1,dist]];
  let visited = [];

  while(queue[0]){
    let tmp = queue.shift();
    let curWord = tmp[0]; 
    let curDist = tmp[1]; 
    // console.log(tmp)
    if (curWord === w2) return curDist;

    for (let i = 0; i < words.length; i++) {
      if (!visited.includes(words[i]) && oneOff(curWord, words[i])){
        visited.push(words[i]);
        queue.push([words[i],curDist + 1]);
      }
    }
  }

  return -1;
}

function oneOff (w1,w2) {
  if (w1.length !== w2.length) return false;
  let diffs = 0;
  for (let i = 0; i < w1.length; i++){
    if(w1[i] !== w2[i]) diffs++;
    if (diffs > 1) return false;
  }
  return diffs === 1;
}


let source = "bit"; 
let target = "dog";
let words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
console.log(shortestPath(source,target,words));
// output: 5
// explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

source = "no";
target = "go";
words = ["to"];
console.log(shortestPath(source,target,words));
// output: -1