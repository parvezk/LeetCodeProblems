/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null || head.next == null)
      return head;
    // close the linked list into group
    let old_tail = head, n;
    for (n = 1; old_tail.next != null; n++)
      old_tail = old_tail.next;
    // connect the loop
    old_tail.next = head;
  
    // find the new tail: (n - k % n - 1)th node
    // find the new head: (n - k % n)th node
    let new_tail = head;
    for (let i = 0; i < (n - k % n - 1); i++)
      new_tail = new_tail.next;
    
    let new_head = new_tail.next;
    // break the ring
    new_tail.next = null;
    
    return new_head;
  };