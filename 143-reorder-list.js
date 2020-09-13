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
    // with slow and fast pointer
    let slow = head, fast = head;
    // Find the middle node of the linked list
    // in 1->2->3->4->5->6 find 4
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // reverse the second part of the list [Problem 206]
    // convert 1->2->3->4->5->6 into 1->2->3->4 and 6->5->4
    // reverse the second half in-place
    let prev = null, next = null;
    while (slow) {
      next = slow.next;
      slow.next = prev
      
      prev = slow
      slow = next;
    }
    
    // merge two sorted linked lists [Problem 21]
    // merge 1->2->3->4 and 6->5->4 into 1->6->2->5->3->4
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
  
  var reorderList = function(head) {
    if (!head || !head.next) return null;
    // with slow and fast pointer
    let slow = head, fast = head;
    
    // find the middle node
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // reverse the second part
    let prev = null, next = null;
    while (slow) {
      next = slow.next;
      slow.next = prev;
      
      prev = slow;
      slow = next;
    }
    
    // merge the two sorted list
    let first = head, second = prev, 
        temp = null;
    while (second.next != null) {
      temp = first.next;
      first.next = second;
      first = temp;
      
      temp = second.next;
      second.next = first;
      second = temp;
    }
  };