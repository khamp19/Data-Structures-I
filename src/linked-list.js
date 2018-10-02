/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = { value, next: null };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    const holder = this.tail;
    holder.next = newNode;
    this.tail = newNode;
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head === null) {
      return null;
    }
    const old = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return old.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    if (this.head.value === value) {
      return true;
    }
    let check = this.head; // stores the value of the current node
    // loop thru list checking the values
    // If value found return true
    // If value not found, go to next node
    while (check !== null) {
      if (check.value === value) {
        return true;
      }
      check = check.next;
    }
    // if value not found by end of list, return false
    return false;
  }
}


module.exports = LinkedList;
