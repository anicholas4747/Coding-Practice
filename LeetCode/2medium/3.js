// 3. Longest Substring Without Repeating Characters
// Medium

// Given a string, find the length of the longest substring without repeating characters.

//   Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    if (!seen[char]) {
      seen[char] = 1;
    } else {
      while (s[start] !== char) {
        seen[s[start]]--;
        start++;
      }
    }
    if (end > 0 && s[start] === char) {
      start++;
    }
    max = Math.max(max, (end + 1 - start));
  }

  return max;
};