function deletionDistance(str1, str2) {
  return helper(str1, str2);
}

function helper(str1, str2, memo = {}) {
  // return 0 if the strings are the same
  if (str1 === str2) return 0;
  // if one string is empty return the length of the other one
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;
  // recurse by taking one letter off one str at a time

  let s1Last = str1.length - 1;
  let s2Last = str2.length - 1;

  let res;
  let key = str1 + "-" + str2;
  if (memo[key] === undefined) {
    if (str1[s1Last] === str2[s2Last]) {
      res = deletionDistance(str1.slice(0, s1Last), str2.slice(0, s2Last));
    } else {
      let changeS1 = deletionDistance(str1.slice(0, s1Last), str2);
      let changeS2 = deletionDistance(str1, str2.slice(0, s2Last));
      res = Math.min(changeS1, changeS2) + 1;
    }
    memo[key] = res;
  }

  return memo[key];
}