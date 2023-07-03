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
  const dummyHead = new ListNode(null);
  dummyHead.next = head;

  const nums = [];
  let duplicated = false;
  let prev = new ListNode(null);
  prev.next = head;
  while (head && head.next) {
    if (head.val === head.next.val) {
      duplicated = true;
      nums.push(0);
    } else {
      if (duplicated) {
        nums.push(0);
      } else {
        nums.push(1);
      }
      duplicated = false;
    }
    prev = prev.next;
    head = head.next;
  }
  nums.push(prev.val === head.val ? 0: 1);

  let p = new ListNode(null);
  let curr = dummyHead.next;
  dummyHead.next = p;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      p.next = curr;
      p = p.next;
    }
    curr = curr.next;
  }

  p.next = null;

  return dummyHead.next.next;
};