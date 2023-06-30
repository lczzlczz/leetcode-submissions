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
  const dummy = new ListNode(null);
  dummy.next = head;

  let prev = dummy;
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let rightNode = prev;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  let leftNode = prev.next;
  let succNode = rightNode.next;

  rightNode.next = null;

  reverseList(leftNode);

  prev.next = rightNode;
  leftNode.next = succNode;

  return dummy.next;
};

const reverseList = head => {
  let prev = null;
  while (head) { 
    const next = head.next;

    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}