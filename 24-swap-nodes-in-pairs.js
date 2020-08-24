
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Recursive appraoch
var swapPairs = function(head) {
  // if the list has no nodes or one node left
  if (head == null || head.next == null)
    return head;
  
  // Nodes to be swapped
  let firstNode = head,
        secondNode = head.next;
  
  // Swapping
  firstNode.next = swapPairs(secondNode.next);
  secondNode.next = firstNode;
  
  // Now the head is the second node
  return secondNode;
};

// Iterative approach
var swapPairs = function(head) {
  if (head == null || head.next == null)
    return head;
  
  let preHead = new ListNode(-1);
  preHead.next = head;
  
  let prevNode = preHead;
  
  while (head != null && head.next != null) {
    
    // Nodes to be swapped
    let firstNode = head,
        secondNode = head.next;
    
    // Swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;
    
    // Reinitialize head and prevNode for next swamp
    prevNode = firstNode;
    head = firstNode.next; // jump
  }
  
  return preHead.next;
};

// Self approach
var swapPairs = function(head) {
  if (head == null || head.next == null) return head;

  if (head != null) {
    const next = head.next.next;
    const temp = head;
    head = head.next;
    head.next = temp;
    temp.next = next;
    // Recurse for next nodes swap
    head.next.next = swapPairs(head.next.next);
  }

  return head;
};
