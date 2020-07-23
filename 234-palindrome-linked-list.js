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
// Approach 3: Reverse Second Half In-place
var isPalindrome = function(head) {
    if (head == null || head.next == null)
        return true;
    
    let listOne = head, listTwo = null;
  
    while (head) {
        let p = new ListNode(head.val);
        p.next = listTwo;
      
        listTwo = p;
        head = head.next;
    }
    
    while (listOne && listTwo) {
        if (listOne.val != listTwo.val)
            return false;

        listOne = listOne.next;
        listTwo = listTwo.next;
    }
    
    return true;
};

//Approach 2: Recursive (Advanced)
var isPalindrome = function(head) {
  let frontPointer = head;
  
  const recursivelyCheck = currentNode => {
    
    if (currentNode != null) {
      if (!recursivelyCheck(currentNode.next)) return false;
      if (currentNode.val != frontPointer.val) return false;
      frontPointer = frontPointer.next;
    }
    return true;
  }
  
  return recursivelyCheck(head)
}
