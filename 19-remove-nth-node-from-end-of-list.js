/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0, curr = head;
    
    while (curr) {
        count++;
        curr = curr.next;
    }

    let prev = null;
    curr = head;
  
    while (curr) {
      if (count == n) {
        if (prev) prev.next = curr.next;
        else head = head.next;
        return head;
      }
      count--;
      prev = curr;
      curr = curr.next;
    }
    
    return null;
};