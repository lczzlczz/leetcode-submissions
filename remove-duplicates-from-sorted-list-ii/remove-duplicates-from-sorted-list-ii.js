/**
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
  // empty or only 1 element
  if (head === null || head.next === null) return head;

  // create dummy node to access head
  let dummyHead = new ListNode();
  dummyHead.next = head;

  // create curr to iterate linked list
  let curr = head;  
  let prev = dummyHead;
  dummyHead.next  = prev;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      const duplicatedValue = curr.val;
      while (curr !== null && curr.val === duplicatedValue) {
        curr = curr.next;
      }
    } else {
      prev.next = curr;
      prev = prev.next;
      curr = curr.next;
    }
  }

  // link prev -> curr
  prev.next = curr;

  return dummyHead.next;
};