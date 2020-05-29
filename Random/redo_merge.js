// Array = [-8, 3, -5, 1, 51, 56, 0, -5, 29, 43, 78, 75, 32, 76, 73, 76]
// Intervals = [[5, 8], [10, 13], [3, 6], [20, 25]]
//              ^S ^E
//Output: [-8, 3, -5, 29, 43, 76, 73, 76]

//Retain order of elements

//Time Complexity: Less than Quadratic
//Space Complexity: Constant

//[Start, End], exclusive of end
//[5,8] => [5,7] remove index 5-7

function removeIntervals(nums, intervals) {
  /*
    m = nums.length
    n = intervals.length
    Time Complexity: O(m*n)
    Space Complexity: O(1)
  */
  mergeIntervals(); // O(n*logn)
  organize("intervals"); // O(n)
  removeSpecificNums(); // O(m*n)
  organize("nums"); // O(m)
  return nums.slice(0,nums.indexOf(undefined));

  function mergeIntervals () {
    intervals.sort((a,b)=>(a[0]!==b[0]) ? a[0]-b[0] : a[1]-b[1]);

    let wipIdx = 0;
    let prevI = intervals[wipIdx];
    for (let i = 1; i < intervals.length; i++) {
      prevI = intervals[wipIdx];
      let [prevS,prevE] = prevI;
      let [currS,currE] = intervals[i];

      if (prevE > currS) {
        intervals[wipIdx][0] = Math.min(prevS,currS);
        intervals[wipIdx][1] = Math.max(prevE, currE);
        intervals[i] = undefined;
      } else {
        wipIdx = i;
      }
    }
  }

  function organize (whichArr) {
    let l = 0;
    let r = 0;
    let len = (whichArr === "nums") ? nums.length : intervals.length;
    while (r < len) {
      if (whichArr === "nums") {
        if (nums[l] === undefined) {
          while (nums[r] === undefined) {
            if (r >= len) return;
            r++;
          }
          [nums[l], nums[r]] = [nums[r], nums[l]];
        }
        l++;
        r++;
      } else {
        if (intervals[l] === undefined) {
          while (intervals[r] === undefined) {
            if (r >= len) return;
            r++;
          }
          [intervals[l],intervals[r]] = [intervals[r],intervals[l]];
        }
        l++;
        r++;
      }
    }
  }

  function removeSpecificNums() {
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i] === undefined) continue;
      let [s,e] = intervals[i];
      while (s < e && s < nums.length) {
        nums[s] = undefined;
        s++;
      }
    }
  }
}
//  idx  = [ 0, 1,  2, 3,  4,  5, 6,  7,  8,  9, 10, 11, 12, 13, 14, 15]
let nums = [-8, 3, -5, 1, 51, 56, 0, -5, 29, 43, 78, 75, 32, 76, 73, 76];
let intervals = [[5, 8], [10, 13], [3, 6], [20, 25]];
console.log(removeIntervals(nums, intervals));
// console.log(removeIntervals(nums, intervals).join("|") === [-8, 3, -5, 29, 43, 76, 73, 76].join("|"));