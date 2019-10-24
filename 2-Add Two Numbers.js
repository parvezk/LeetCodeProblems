/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let preHead = new ListNode(-1);
    let curr = preHead;
    let carry = 0;
    
    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;
    
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        carry = Math.trunc(sum / 10);
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    if (carry)
        curr.next = new ListNode(carry);
    
    return preHead.next;
};
