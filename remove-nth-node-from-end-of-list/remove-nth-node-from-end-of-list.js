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
  const dummy = new ListNode(null);
  dummy.next = head;
  let count = 0;

  while (head !== null) {
    head = head.next;
    count++;
  }

  let countdown = count - n;
  let prev = dummy;
  head = dummy.next;
  while (countdown > 0 && head) {
    prev = prev.next;
    head = head.next;
    countdown--;
  }

  prev.next = head.next;
  return dummy.next;
};