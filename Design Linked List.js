/**
 * Design Linked List
 * Initialize your data structure here.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }

  getNode(index) {
    if (index < 0) return null;
    let curr = this.head;
    for (let i = 0; i < index && curr; ++i) {
      curr = curr.next;
    }
    return curr;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  get(index) {
    let curr = this.getNode(index);
    return curr == null ? -1 : curr.val;
  }

  // ADD A NEW NODE
  addAtHead(val) {
    const curr = new ListNode(val);
    curr.next = this.head;

    if (this.head != null) this.head.prev = curr;

    this.head = curr;
  }

  addAtTail(val) {
    if (this.head == null) {
      this.addAtHead(val);
      return;
    }
    let prev = this.getTail();
    const curr = new ListNode(val);
    prev.next = curr;
    curr.prev = prev;
  }

  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }

    let prev = this.getNode(index - 1);
    if (prev == null) return;

    let next = prev.next || null;
    const curr = new ListNode(val);
    curr.prev = prev;
    curr.next = next;

    prev.next = curr;
    if (next != null) next.prev = curr;
  }

  // DELETE A NODE
  deleteAtIndex(index) {
    let curr = this.getNode(index);
    if (curr == null) return;

    let prev = curr.prev;
    let next = curr.next;
    if (prev != null) prev.next = next;
    else this.head = next;

    if (next != null) next.prev = prev;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
