/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortedInsert = (sorted, new_node) => {
  /* Special case for the head end */
  if (sorted == null || sorted.val >= new_node.val) {
    new_node.next = sorted;
    sorted = new_node;
  } else {
    /* Locate the node before the point of insertion */
    let current = sorted;
    while (current.next != null && current.next.data < new_node.val) {
      current = current.next;
    }
    new_node.next = current.next;
    current.next = new_node;
  }
  return sorted;
};

const InsertionSort = head => {
  // Initialize sorted linked list
  let sorted = null;
  // Traverse the given linked list
  // and insert every node to sorted
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    // insert current in sorted linked list
    sorted = sortedInsert(sorted, curr);

    curr = next;
  }
  return sorted;
};

var insertionSortList = function(head) {
  return InsertionSort(head);
};
