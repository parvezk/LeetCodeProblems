/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// Recursive
var copyRandomList = function(head) {
  if (head == null) return null;
  // HashMap which holds old nodes as keys and new nodes as its values.
  const visited_dict = new Map();
  
  const copyRandom = current => {
    if (current == null) return null;
    
     // If we have already processed the current node, then we simply return the cloned version of it
    if (visited_dict.has(current))
      return visited_dict.get(current);
    else
    {
      // Create a new node with the value same as old node. (i.e. copy the node)
      let copy_of_current = new ListNode(current.val);
      // Save this value in the hash map. This is needed since there might be
    // loops during traversal due to randomness of random pointers and this would help us avoid them.
      visited_dict.set(current, copy_of_current);
      // Recursively copy the remaining linked list starting once from the next pointer and then from the random pointer.
    // Thus we have two independent recursive calls.
    // Finally we update the next and random pointers for the new node created.
      copy_of_current.next = copyRandom(current.next);
      copy_of_current.random = copyRandom(current.random);
    }
  }
  
  return copyRandom(head);
};