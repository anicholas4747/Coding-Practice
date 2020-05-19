/*
Wiggle Sort
Given an unsorted array nums, reorder it in -place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Example:

Input: nums = [3, 5, 2, 1, 6, 4]
Output: One possible answer is[3, 5, 1, 6, 2, 4]
Last Submission
Last Saved Code
* @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0 && nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    } else if (i % 2 === 1 && nums[i] < nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
  return nums;
};
/*
[3,5,2,1,6,4]

[3,5,2,6,1,4]


[3,5,1,6,2,4]

[1,2,3]
[1,3,2]

[100,2,300]
[2,100,300]
[2,300,100]

[100,1,2,3,4]
[1,100,2,3,4]
[1,100,2,4,3]
[5,5,10,10]
[5,10,5,10]
*/