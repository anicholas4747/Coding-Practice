// 2. Add Two Numbers
// Medium

// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) l1 = new ListNode(0);
  if (!l2) l2 = new ListNode(0);

  let res = new ListNode((l1.val + l2.val) % 10);

  if (l1.val + l2.val > 9) {
    if (!l1.next) {
      l1.next = new ListNode(1);
    } else {
      l1.next.val += 1;
    }
  }

  res.next = addTwoNumbers(l1.next, l2.next);

  return res;
};