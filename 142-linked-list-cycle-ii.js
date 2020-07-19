/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const hasCycle = head => {
  let slow = head, fast = head;
  //A fast pointer will either loop around a cycle and meet the slow
  //pointer or reach the `null` at the end of a non-cyclic list.
  while (fast != null && fast.next != null) {  
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow == fast) return fast;
  }
  return null;
}

var detectCycle = function(head) {
  if (head == null || head.next == null)
    return null;
  //Get intersection: If there is a cycle, the fast/slow pointers will intersect at some node. 
  //Otherwise, there is no cycle
  const intersect = hasCycle(head);
  if (intersect == null) return null;
  // To find the entrance to the intersection, we have two pointers traverse at the same speed, 
  // one from the start of the list and one from the point of intersecton
  let ptr1 = head, ptr2 = intersect;
  
  while (ptr1 != ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return ptr2;
};