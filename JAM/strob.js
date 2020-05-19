/*
Strobogrammatic Number
A strobogrammatic number is a number that looks the same when rotated 180 degrees(looked at upside down).

Write a function to determine if a number is strobogrammatic.The number is represented as a string.

  Example 1:

Input: "69"
Output: true
Example 2:

Input: "88"
Output: true
Example 3:

Input: "962"
Output: false
Last Submission
Last Saved Code

 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  if (num.length === 0) return true;

  let beg = 0;
  let end = num.length - 1;

  while (beg <= end) {
    if (!isValid(beg, end)) return false;
    beg++;
    end--;
  }

  return true;

  function isValid(beg, end) {
    if (num[beg] === "0"
      || num[beg] === "1"
      || num[beg] === "8") {
      return num[beg] === num[end];
    } else if (num[beg] === "6") {
      return num[end] === "9"
    } else if (num[beg] === "9") {
      return num[end] === "6"
    } else {
      return false
    }
  }
};

/*
1234567890
018   69
6699 -> true
9696 -> true
800000008
669 -> false
racecar
l     r

99166

edge case - if empty, return true

two pointers (beg & end)

iterative - while loop (beg < end)



if odd num of chars, middle must be 018

*/