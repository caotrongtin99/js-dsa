/**
 * URL: https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  const result = new ListNode(0);
  let iterator = result;
  let currentList1Index = 0;
  let currentList2Index = 0;
  
  while (list1 || list2) {
      const list1Val = typeof list1?.val === "undefined" ? Number.MAX_SAFE_INTEGER : list1.val
      const list2Val = typeof list2?.val === "undefined" ? Number.MAX_SAFE_INTEGER : list2.val
      if (list1Val >= list2Val) {
          iterator.next = new ListNode(list2.val)
          list2 = list2.next
      } else {
          iterator.next = new ListNode(list1.val)
          list1 = list1.next
      }
      iterator = iterator.next

  }
  return result.next
};