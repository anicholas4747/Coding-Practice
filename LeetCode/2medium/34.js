/* 34. Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

  Example 1:

Input: nums = [5, 7, 7, 8, 8, 10], target = 8
Output: [3, 4]
Example 2:

Input: nums = [5, 7, 7, 8, 8, 10], target = 6
Output: [-1, -1]
*/

var searchRange = function (nums, target) {
  // initialize pointers
  let beg = 0;
  let end = nums.length;
  let mid = Math.floor((end + beg) / 2);
  //search while pointers haven't overlapped
  while (beg <= end) {
    if (nums[mid] === target && (mid === 0 || nums[mid - 1] !== target)) {
      let last = mid;
      while (nums[last + 1] === target) {
        last++;
      }
      //return arr of their first and last pos
      return [mid, last];
    } else if (nums[mid] < target) {
      beg = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((end + beg) / 2);
  }
  return [-1, -1];
};