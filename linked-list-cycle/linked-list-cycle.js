/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const nodeLimit = 10e4;
  let count = 0;
  let fast = head;
  while (fast && fast.next && count++ <= nodeLimit) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }    
  return false;
};