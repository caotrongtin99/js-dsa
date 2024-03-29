/**
 * Problem: https://leetcode.com/problems/add-two-numbers
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(0);
  let iterator = result;
  let sum = 0;
  while (l1 || l2 || sum > 0) {
    sum = (l1?.val || 0) + (l2?.val || 0) + sum;
    l1 = l1?.next
    l2 = l2?.next
    iterator.next = new ListNode(sum % 10);
    iterator = iterator.next
    sum = sum > 9 ? 1 : 0;
  }

  return result.next;
};