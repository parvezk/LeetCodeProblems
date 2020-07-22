/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null || head.next == null)
    return false;
  
  let slow = head,
      fast = head.next;
  
  while (slow != fast) {
    if (slow == null || fast.next == null)
      return false;
    
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// Number of iterations = almost "cyclic length K"
// Therefore, the worst case time complexity is O(N+K) = O(n)
// Space complexity : O(1). We only use two nodes (slow and fast)

// My method
var hasCycle = function(head) {
  if (head == null || head.next == null)
    return false;
  
  let slow = head,
      fast = head.next;
  
  while (slow && fast) {
    if (slow == fast) return true;
    
    slow = slow.next || null
    fast = fast.next ? fast.next.next : null;
  }
  return false;
}