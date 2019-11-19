// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let last = this.head;

    while (last && last.next) {
      last = last.next;
    }

    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode && currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!previousNode) {
      this.head = null;
    } else {
      previousNode.next = null;
    }
  }

  insertLast(data) {
    const last = this.getLast();
    const newNode = new Node(data);
    if (!last) {
      this.head = newNode;
      return;
    }

    last.next = newNode;
  }

  getAt(index) {
    if (typeof index !== "number") {
      throw new TypeError("index should be a number");
    }

    let currentNode = this.head;
    let counter = 0;
    while (currentNode && counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    if (counter < index) {
      return null;
    }
    return currentNode;
  }
}

module.exports = { Node, LinkedList };
