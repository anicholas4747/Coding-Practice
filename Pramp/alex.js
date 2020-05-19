// Given a target, int
// And a list of integers, find 2 numbers that add up to the target

//Example: [2,5,7,9,10,11] target = 21
// [10,11] <= return 2 numbers

// function(target, bannedDigit)

//BannedDigit = 0-9
//Return 2 numbers, not containing banned digit, that sum to target
//function(11,1)
//[9,2]

//zero can be banned, zero can be target, if zero not banned, it can be in sol

// 1179428119
// 
// 3379428339
//-2200000220

/*
console.log(1)
for(let i = 0; 100 > i; i++){
  let tar = Math.floor(Math.random() * 1000)
  console.log(`Target:${tar} | Res:` + bannedDigit( tar,1)) // 213 | Res:20,193
}

function bannedDigit (target, bannedNum) { 
  let targStr = String(target);
  let resStr = ""; 
    // if bD = 0
    if (bannedNum === 0) {
      // if no zero, add one, comp is -1 || (99, 0) 
      if (!targStr.includes("9") && !targStr.includes("0")) {
        // 109, 0 -> "012" "97"
        return [target+1,-1];
      } else {
        let seenAZero = false;
        for (let i = 0; i < targStr.length; i++) {
          let curr = targStr[i];
          // add 2 if the num is 9
          if (curr === "9") {
            resStr += "2";
          // add 1 where we see a zero
          } else if (curr === "0") {
            resStr += "1";
          // add 1 after we see zero
          } else {
            if (seenAZero) {
              resStr += "1";
            } else {
              resStr += "0";
            }
          }
        }
        let resNum = parseInt(resStr);
        return [resNum,target-resNum]; 
      }
    } else if (bannedNum === 1) {
      for (let i = 0; i < targStr.length; i++) {
        let curr = targStr[i];
        if (curr === "1") {
          resStr += "2";
        } else {
          resStr += "0";
        } 
      }
        let resNum = parseInt(resStr);
      return [resNum,target-resNum];
    // if bd = 1
      // add 2 & find comp
    } else {
      for (let i = 0; i < targStr.length; i++) {
        let curr = targStr[i];
        if (curr === String(bannedNum)) { 
          resStr += "1";
        } else {
          resStr += "0";
        }
      }
      let resNum = parseInt(resStr);
      return [resNum,target-resNum];
    // else 
      // add 1 where we see bannedDigit and zero everywhere else
    }
}

/*
(191111, 1)
 393333 - 191111 = 202222
 [39333,-20222]


 (8724976, 4)
  0001000

(17099,0)
   122, 

(191,9) => [181,10]
*/

/*
function numSum (arr, target) {
  // initialize a hash
  let comps = {};
  // iterate through the arr once
  for (let i = 0; i < arr.length; i++) {
    if (comps[arr[i]] === undefined) {
      comps[target - arr[i]] = arr[i];
    } else {
      // if I have seen this key in the hash, return k and v in an arr
      return [arr[i],comps[arr[i]]];
    }
  }  
}

console.log(numSum([2,5,7,9,10,11], 21))
*/
* /