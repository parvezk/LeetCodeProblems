var swapPairs = function(head) {
    if (head == null || head.next == null) 
        return head;
    
    if (head != null) {
        
        const next = head.next.next;
        const temp = head;
        head = head.next
        head.next = temp;
        temp.next = next;

        head.next.next = swapPairs(head.next.next)
    }
    
    return head;
};