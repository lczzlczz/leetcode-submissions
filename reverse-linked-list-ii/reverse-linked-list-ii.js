/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  let prev = dummyHead;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  } 

  head = prev.next;
  const rightNode = head;

  for (let i = left; i < right; i++) {
    head = head.next;
  }

  const leftNode = head;
  const succNode = head?.next;

  leftNode.next = null;
  reverse(rightNode);

  // connection
  prev.next = leftNode;
  rightNode.next = succNode;

  return dummyHead.next;
};

const reverse = head => {
  if (head === null) return head;

  let prev = null;
  while (head !== null) {
    [head.next, prev, head] = [prev, head, head.next];
  }
}