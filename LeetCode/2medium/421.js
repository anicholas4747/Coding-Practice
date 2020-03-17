// 421. Maximum XOR of Two Numbers in an Array
// Medium

// 940

// 167

// Add to List

// Share
// Given a non - empty array of numbers, a0, a1, a2, … , an - 1, where 0 ≤ ai < 231.

// Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

// Could you do this in O(n) runtime ?

//   Example :

//   Input: [3, 10, 5, 25, 2, 8]

// Output: 28

// Explanation: The maximum result is 5 ^ 25 = 28.

var findMaximumXOR = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let res = nums[i] ^ nums[j];
      max = Math.max(res, max);
    }
  }

  return max;
};