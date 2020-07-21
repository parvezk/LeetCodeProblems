/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head == null) return head;
  
  let curr = head, prev = null;
  
  while (curr) {
    
    if (curr.val == val) {
      if (prev == null)
        head = head.next;
      else
        prev.next = curr.next;
      
      curr = curr.next;
      continue;
    }
    
    prev = curr;
    curr = curr.next || null;
  }
  
  return head;
};