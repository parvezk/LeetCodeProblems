/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head == null || head.next == null) return;
    // Find the middle node of the linked list
    // with slow and fast pointer
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // Reverse the second part of the list
    let prev = null, next = null;
    while (slow) {
      next = slow.next;
      slow.next = prev
      
      prev = slow
      slow = next;
    }
    
    // Merge two sorted list
    let first = head, second = prev, temp = null;
    while (second.next != null) {
      temp = first.next;
      first.next = second;
      first = temp;
      
      temp = second.next;
      second.next = first;
      second = temp;
    }
    
  };