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
// Recursion
var mergeTwoLists2 = function(l1, l2) {
  if (l1 == null && l2 == null) return null;
  else if (l1 == null) return l2;
  else if (l2 == null) return l1;
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};

// Iteration
var mergeTwoLists = function(l1, l2) {
  if (l1 == null && l2 == null) return null;
  else if (l1 == null) return l2;
  else if (l2 == null) return l1;
  else {
    let preHead = new ListNode(-1),
      prev = preHead;
    preHead.next = prev;

    while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }
    // if either list is non-empty
    if (l1 != null) prev.next = l1;
    if (l2 != null) prev.next = l2;

    return preHead.next;
  }
};
