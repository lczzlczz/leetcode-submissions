/**
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
  var head = new ListNode;
  var p = head;
  var carry = 0;
  while (l1 || l2) {
    const val1 = l1 !== null? l1.val: 0;
    const val2 = l2 !== null? l2.val: 0;
    const sum = val1 + val2 + carry;
    
    const node = new ListNode(sum % 10);
    p.next = node;
    p = p.next;
    l1 = l1 ? l1.next: null;
    l2 = l2 ? l2.next: null;

    carry = sum > 9 ? 1: 0;
  }

  p.next = carry ? new ListNode(carry): null;

  return head.next;
};