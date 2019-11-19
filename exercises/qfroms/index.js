// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

function transferStack(source, dest) {
  while (typeof source.peek() !== "undefined") {
    dest.push(source.pop());
  }
}

function isUndef(element) {
  return typeof element === "undefined";
}

class Queue {
  constructor() {
    this.stack = new Stack();
    this.reverseStack = new Stack();
  }

  add(element) {
    if (isUndef(this.stack.peek()) && !isUndef(this.reverseStack.peek())) {
      transferStack(this.reverseStack, this.stack);
    }

    this.stack.push(element);
  }

  remove() {
    if (isUndef(this.reverseStack.peek()) && !isUndef(this.stack.peek())) {
      transferStack(this.stack, this.reverseStack);
    }

    return this.reverseStack.pop();
  }

  peek() {
    if (isUndef(this.reverseStack.peek()) && !isUndef(this.stack.peek())) {
      transferStack(this.stack, this.reverseStack);
    }

    return this.reverseStack.peek();
  }
}

module.exports = Queue;
