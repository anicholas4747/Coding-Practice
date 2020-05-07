// Array = [-8, 3, -5, 1, 51, 56, 0, -5, 29, 43, 78, 75, 32, 76, 73, 76]
// Intervals = [[5, 8], [10, 13], [3, 6], [20, 25]]
//              ^S ^E
//Output: [-8, 3, -5, 29, 43, 76, 73, 76]

//Retain order of elements
//If there is an overlapping interval, 

//Time Complexity: Less than Quadratic
//Space Complexity: No additional memory aside from output

//[Start, End], exclusive of end
//[5,8] => [5,7] remove index 5-7

function removeIntervals(nums, intervals) {
  if (nums.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0])
  //intervals = qs(intervals);
  let mergedIntervals = [];

  let currIntervalStart = intervals[0][0];
  let currIntervalEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    // is the start of the curr within the last interval
    let [currStart, currEnd] = intervals[i];

    // replace both with a merged version with 
    if (currStart <= lastEnd) {
      currIntervalEnd = Math.max(currEnd, currIntervalEnd);
    } else {
      mergedIntervals.push([currIntervalStart, currIntervalEnd]);
      currIntervalStart = currStart;
      currIntervalEnd = currEnd;
    }
  }
  mergedIntervals.push([currIntervalStart, currIntervalEnd]);

  mergedIntervals.forEach(int => {
    let [s, e] = int;
    while (s < e) {
      nums[s] = undefined;
      s++;
    }
  })

  // [1,3,3,4,u,u,6,u,u,u,1]
  let lastValidIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== undefined) {
      [nums[i], nums[lastValidIdx]] = [nums[lastValidIdx], nums[i]];
      lastValidIdx++
    }
  }

  return nums.slice(0, lastValidIndex);
}
// Time complexity: O(N+IlogI)

// Time Complexity: O(N*I)
// Space Complexity: O()

let arr = [-8, 3, -5, 1, 51, 56, 0, -5, 29, 43, 78, 75, 32, 76, 73, 76]
let intervals = [[5, 8], [10, 13], [3, 6], [20, 25]]

console.log(removeIntervals(arr, intervals))

// 


























/*
function firstUniq (str) {
let hash = {};
for (let i = 0; i < str.length; i++) {
  let curr = str[i].toLowerCase();
  if (hash[curr] === undefined) hash[curr] = 0;
  hash[curr]++;
}
for (let i = 0; i < str.length; i++) {
  let curr = str[i].toLowerCase();
  if (hash[curr] === 1) return str[i];
}
return "";
}

/*
console.log(firstUniq("Ac")) //A
console.log(firstUniq("Aa"))
console.log(firstUniq("Zz"))
console.log(firstUniq(""))
console.log(firstUniq("appa"))
*/

