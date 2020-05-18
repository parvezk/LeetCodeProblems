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
var copyRandomList = function(head) {
    if (head == null) return null;
    
    const visited_dict = new Map();
    
    const copyRandom = current => {
      if (current == null) return null;
      
      if (!visited_dict.has(current))
      {
        let copy_of_current = new ListNode(current.val);
        visited_dict.set(current, copy_of_current);
        copy_of_current.next = copyRandom(current.next);
        copy_of_current.random = copyRandom(current.random);
      }
      return visited_dict.get(current);
    }
    
    return copyRandom(head);
  };