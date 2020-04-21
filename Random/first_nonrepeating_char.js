/**
 * Given non-empty string that only contains lowercase letters from a to z
 * find the first non-repeating char
 * if none exist, return "_"
 * 
 * Examples:
 * "a" => "a"
 * "aaabccc" => "b"
 * "abcab" => "c"
 * "abcdabce" => "d"
 */
const firstNonRepChar = function (str) {
  let hash = {};

  for (let i = 0; i< str.length; i++){
    let char = str[i];
    (hash[char] === undefined) ? hash[char] = 1 : hash[char]++;
  }

  for (let i = 0; i < str.length; i++){
    let char = str[i];
    if (hash[char] === 1) return char;
  }

  return "_";
};
console.log(firstNonRepChar("a"));
console.log(firstNonRepChar("aaabccc"));
console.log(firstNonRepChar("abcab"));
console.log(firstNonRepChar("abcdabce"));