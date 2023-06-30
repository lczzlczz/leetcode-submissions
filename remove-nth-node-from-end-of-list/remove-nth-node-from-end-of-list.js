/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummyHead = new ListNode; 
  dummyHead.next = head;

  let fast = head;
  while (n-- > 0 && fast !== null) {
    fast = fast.next;
  }

  let slow = dummyHead;
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
};