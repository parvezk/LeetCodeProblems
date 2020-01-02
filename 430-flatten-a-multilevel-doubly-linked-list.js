/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

// DFS by Recursion
var flatten = function(head) {
  if (head == null) return null;

  const stack = [];
  let curr = head;

  while (curr != null) {
    next = curr.next;

    if (curr.child != null) {
      if (curr.next != null) stack.push(curr.next);

      curr.next = curr.child;
      curr.next.prev = curr;
      curr.child = null;
    } else if (curr.next == null && stack.length > 0) {
      curr.next = stack.pop();
      curr.next.prev = curr;
    }

    curr = curr.next;
  }
  return head;
};

// TODO
// DFS By Iteration
