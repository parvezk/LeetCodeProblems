/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head == null || head.next == null) return head;
  if (k == 0) return head;

  let iter = 1;
  let P1 = head;
  let P2 = head;
  let preHead = new ListNode(-1);
  let rightStart, rightEnd;

  while (P1) {
    if (iter % k == 0) {
      let next = P1.next;
      P1.next = null;

      rightStart = rightEnd;
      rightEnd = P2;

      let reverseList = null;
      while (P2) {
        let next_next = P2.next;
        P2.next = reverseList;
        reverseList = P2;

        P2 = next_next; //inner iteration from left to right
      }
      if (!preHead.next) preHead.next = reverseList;
      if (rightStart) rightStart.next = reverseList;
      rightEnd.next = next;

      P1 = rightEnd;
      P2 = rightEnd.next;
      iter = 0;
    }
    iter++;
    P1 = P1.next;
  }
  if (!preHead.next) return head;
  return preHead.next;
};

/* // TEST CASES
[1,2,3,4,5, 6, 7]
3
[1]
2
[1,2]
5
*/
