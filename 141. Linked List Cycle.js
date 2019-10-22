/**
 * 141. Linked List Cycle

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
  if (head == null || head.next == null) return false;

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// Number of iterations = almost "cyclic length K"
// Therefore, the worst case time complexity is O(N+K) = O(n)
// Space complexity : O(1). We only use two nodes (slow and fast)

/*
// My method 
var hasCycle = function(head) {
    if (head == null || head.next == null)
        return false
    
    let slowRunner = head;
    let fastRunner = head.next;
    
    while (slowRunner && fastRunner) {
        
        if (slowRunner == fastRunner)
            return true;
    
        slowRunner = slowRunner.next || null;
        fastRunner = fastRunner.next ? fastRunner.next.next :null;
    }
    return false;
};
*/
