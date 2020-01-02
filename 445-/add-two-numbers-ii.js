/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let stack1 = [],
    stack2 = [];

  while (l1 || l2) {
    if (l1) stack1.push(l1.val);
    if (l2) stack2.push(l2.val);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  let curr = null,
    next = null;
  (carry = 0), (sum = 0);

  while (stack1.length || stack2.length) {
    let x = stack1.length ? stack1.pop() : 0;
    let y = stack2.length ? stack2.pop() : 0;

    sum = x + y + carry;
    curr = new ListNode(sum % 10);
    carry = Number.parseInt(sum / 10);

    curr.next = next;
    next = curr;

    l1 = l1 ? l1.val : null;
    l2 = l2 ? l2.val : null;
  }

  if (carry > 0) {
    let last = new ListNode(carry);
    last.next = curr;
    curr = last;
  }

  return curr;
};
