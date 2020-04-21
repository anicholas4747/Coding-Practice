// https://www.youtube.com/watch?v=qli-JCrSwuk

/*
a->1,b->2,z->25
Given a number
return num ways to decode this num
*/

// BROKEN CODE
// function decodeNum (num, memo = {}) {
//   if (num === 0) return 0;
//   if (num > 0 && num <= 10) return 1;
//   if (num > 10 && num <= 26) return 2;
//   if (num % 10 === 0 && num < 100) return 0;
//   if (num > 26 && num < 100) return 1;
  
//   if (!memo[num]) {
//     let firstTwo = parseInt(String(num).slice(0,2));
//     let rest = parseInt(String(num).slice(2));
//     if((firstTwo % 10 === 0 || firstTwo % 10 > 2) && rest === 0) return 0;
//     memo[num] = (decodeNum(firstTwo) * decodeNum(rest)) + 1;
//   }
//   // console.log(memo)
//   return memo[num];
// }

function decodeNum (num) {
  let numStr = String(num);
  return helper(numStr, numStr.length);

  function helper (numStr, len, memo = {}) {
    if (len === 0) return 1;

    let s = numStr.length - len;
    if (numStr[s] === "0") return 0;

    if (!memo[len]) {
      let result = helper(numStr, len - 1, memo);
      if (len > 1 && parseInt(numStr.slice(s, s+2)) < 27) {
        result += helper(numStr, len - 2, memo);
      }
      memo[len] = result;
    }
    return memo[len];
  }
}

console.log(decodeNum(1) === 1); //=> 1 ["a"]
console.log(decodeNum(10) === 1); //=> 1 ["j"]
console.log(decodeNum(26) === 2); //=> 2 ["bf", "z"]
console.log(decodeNum(30) === 0); //=> 0
console.log(decodeNum(52) === 1); //=> 1 ["eb"]
console.log(decodeNum(100) === 0); //=> 0
console.log(decodeNum(222) === 3); //=> 3 ["bbb", "bv", "vb"]
console.log(decodeNum(520) === 1); //=> 1 ["et"]
console.log(decodeNum(1234) === 3); //=> 3 ["abcd", "lcd", "awd"]
console.log(decodeNum(12121) === 8); //=> 8 ["ababa","auu","abau","lla","lau","laba", "auba", "abla"] **MY ORIGINAL CODE IS BROKEN**
console.log(decodeNum(123405) === 0); //=> 0
console.log(decodeNum(1234222) === 9); //=> 9 ["abcdbbb", "abcdbv", "abcdvb", "lcdbbb", "lcdbv", "lcdvb", "awdbbb", "awdbv", "awdvb"]
console.log(decodeNum(12341234) === 9); //=> 9 ["abcdabcd", "lcdabcd", "awdabcd", "abcdlcd", "lcdlcd", "awdlcd", "abcdawd", "lcdawd", "awdawd"]
console.log(decodeNum(43214321) === 6); //=> 6 ["dcbadcba", "dcbadcu", "dcudcba", "dcudcu", "dcbncba", "dcbncu"] **MY ORIGINAL CODE IS BROKEN**