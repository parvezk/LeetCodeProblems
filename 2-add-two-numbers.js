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
  let sum = 0, carry = 0,
      preHead = new ListNode(-1, null),
      curr = preHead;
  
  while (l1 || l2) {

    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.trunc(sum / 10);
    
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    curr = curr.next;
  }
  
  if (carry > 0) 
    curr.next = new ListNode(carry);
  
  return preHead.next;
};