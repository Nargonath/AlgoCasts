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

  removeAt(index) {
    if (typeof index !== "number" || !Number.isInteger(index) || index < 0) {
      throw new TypeError("index should be a positive integer");
    }

    if (!this.head) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);
    if (!previousNode || !previousNode.next) {
      return;
    }

    const nodeToBeDeleted = previousNode.next;
    previousNode.next = nodeToBeDeleted.next;
  }

  // first solution but brute force
  // removeAt(index) {
  //   if (typeof index !== "number" || !Number.isInteger(index) || index < 0) {
  //     throw new TypeError("index should be a positive integer");
  //   }

  //   if (!this.head) {
  //     return;
  //   } else if (index === 0) {
  //     this.head = this.head.next;
  //     return;
  //   }

  //   let currentNode = this.head;
  //   let previousNode = null;
  //   let counter = 0;
  //   while (currentNode && counter < index) {
  //     previousNode = currentNode;
  //     currentNode = currentNode.next;
  //     counter++;
  //   }

  //   if (currentNode && previousNode) {
  //     previousNode.next = currentNode.next;
  //   }
  // }

  insertAt(data, index) {
    if (typeof index !== "number" || !Number.isInteger(index) || index < 0) {
      throw new TypeError("index should be a positive integer or 0");
    }

    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    previousNode.next = new Node(data, previousNode.next);
  }

  forEach(fn) {
    if (typeof fn !== "function") {
      throw new TypeError("argument should be a function");
    }

    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      fn(currentNode, index);
      currentNode = currentNode.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
