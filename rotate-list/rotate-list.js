/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null) return head;

  let count = 0;

  let curr = head;
  let tail; // the node link to head after rotation
  while(curr !== null) {
    tail = curr;
    curr = curr.next;
    count++;
  }

  const lastKth = k % count;
  // no need to rotate
  if (lastKth === 0) return head;

  const lastNode = findLastKthNode(head, lastKth + 1);
  const newHead = lastNode.next;

  // connection
  // newHead ... tail -> head ... lastNode -> null
  lastNode.next = null;
  tail.next = head;

  return newHead;
};

const findLastKthNode = (head, k) => {
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  let curr = head;
  while (fast !== null) {
    fast = fast.next;
    curr = curr.next;
  }

  return curr;
}