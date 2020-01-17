/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, val) {
  // CASE 1: empty list
  if (head == null) {
    let node = new Node(val, null);
    node.next = node;
    return node;
  }
  // CASE 2: bigger than max or lesser than min
  // CASE 2.1: find the max
  let max = head;
  while (max.next != head && max.val <= max.next.val) max = max.next;

  let min = max.next,
    curr = min;
  // CASE 2.2: bigger than max or lesser than min
  if (val >= max.val || val <= min.val) max.next = new Node(val, min);
  else {
    // CASE 3: Find its suitable position
    while (curr.next.val < val) curr = curr.next;

    curr.next = new Node(val, curr.next);
  }
  return head;
};
