/* 394. Decode String
Medium

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well - formed, etc.

  Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

var decodeString = function (s) {
  if (s === "" || !s.includes("[")) return s;

  let times = 0;
  let openIdx = 0;
  let closeIdx = 0;
  let openCount = 0;

  let i = 0;
  while (closeIdx === 0) {
    if (times === 0 && "123456789".includes(s[i])) {
      let numIdx = i;
      while ("0123456789".includes(s[numIdx + 1])) {
        numIdx++;
      }
      times = parseInt(s.slice(i, numIdx + 1));
    }
    if (s[i] === "[") {
      openCount++;
      if (openIdx === 0) openIdx = i;
    }
    if (s[i] === "]") {
      openCount--;
      if (openCount === 0) closeIdx = i;
    }
    i++;
  }

  let res = "";
  let randomChars = s.slice(0, openIdx - 1);
  if (openIdx - 1 > 0) {
    let endOfRandomChars = 0;
    while (endOfRandomChars < randomChars.length && !"0123456789".includes(randomChars[endOfRandomChars])) {
      endOfRandomChars++;
    }
    res = randomChars.slice(0, endOfRandomChars);
  }
  let subStr = decodeString(s.slice(openIdx + 1, closeIdx));
  while (times > 0) {
    res += subStr;
    times--;
  }

  let rest = decodeString(s.slice(closeIdx + 1));
  return res + rest;
};