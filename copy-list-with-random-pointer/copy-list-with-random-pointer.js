/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let curr = head;
  let map = new Map;

  let p = new ListNode();
  const reserved = p;
  while (curr) {
    const node = new Node(curr.val);
    map.set(curr, node);
    p.next = node;
    p = p.next;
    curr = curr.next;
  }

  p.next = null;

  let newHead = reserved.next;
  while(newHead) {
    newHead.random = map.get(head.random);
    newHead = newHead.next;
    head = head.next;
  }

  return reserved.next;
};