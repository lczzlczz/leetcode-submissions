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
  if (head === null || head.next === null) return head;

  let dummyHead = new ListNode();
  dummyHead.next = head;

  const uniques = [];
  let duplicated = false;
  while (head !== null && head.next !== null) {
    if (head.val === head.next.val) {
      uniques.push(0);
      duplicated = true;
    } else {
      uniques.push(!duplicated? 1: 0)
      duplicated = false;
    }
    head = head.next;
  }

  uniques.push(!duplicated ? 1: 0);

  let prev = dummyHead;
  head = dummyHead.next;
  dummyHead = prev;


  for (const key of uniques) {
    if (key) {
      prev.next = head;
      prev = prev.next;
    }
    head = head.next;
  }

  prev.next = head;

  return dummyHead.next;
};