/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// SHORT VERSION
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let curr = head,
    prev = null,
    next = null;

  // Reach the starting point
  while (m > 1) {
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }

  // To adjust the connection after sublist reversal,
  // retain right end point (new tail i.e curr)
  tail = curr;

  // Reverse the sublist from m to n (inclusive)
  let rev = null;
  while (n > 0) {
    next = curr.next;
    curr.next = rev;

    rev = curr;
    curr = next;
    n--;
  }

  // Adjust the connections
  if (prev != null) prev.next = rev;
  else head = rev;
  tail.next = curr;

  // return the full list
  return head;
};

// LONG VERSION
var reverseBetween = function(head, m, n) {
  let curr = head,
    prev = null;
  // Reach the starting point
  while (m > 1) {
    prev = curr;
    curr = curr.next;
    m--;
    n--;
    a;
  }

  // To adjust the connection after sublist reversal,
  // retain left end point (prev) and right end point (new tail = cur)
  let left = prev,
    tail = curr;

  // Reverse the sublist from m to n (inclusive)
  let third = null;
  while (n > 0) {
    third = curr.next;
    curr.next = prev;
    prev = curr;
    curr = third;
    n--;
  }

  // Adjust the connections
  if (left != null) left.next = prev;
  else head = prev;
  tail.next = curr;

  return head;
};
