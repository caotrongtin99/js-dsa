/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if (head === null) return null
  let cur = head
  
  while (cur) {
      if (cur.val === cur?.next?.val) {
          cur.next = cur?.next?.next
      } else {
          cur = cur.next
      }
      
  }
  
  return head
};
