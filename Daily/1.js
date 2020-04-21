// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass ?

const twoSum = (arr,target) => {
  let seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (seen.has(el)) {
      return true;
    } else {
      seen.add(target - el);
    }
  }

  return false;
};

console.log(twoSum([10, 15, 3, 7],16)); // => false
console.log(twoSum([10, 15, 3, 7],17)); // => true [10,7]
console.log(twoSum([10, 15, 3, 7],18)); // => true [15,3]

// Time: O(n) - One pass through arr
// Space: O(n) - size of set could be size of arr