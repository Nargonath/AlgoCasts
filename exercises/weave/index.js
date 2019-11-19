// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function isUndefined(element) {
  return typeof element === "undefined";
}

function weave(sourceOne, sourceTwo) {
  if (!(sourceOne instanceof Queue) || !(sourceTwo instanceof Queue)) {
    throw new TypeError("arg should be an instance of Queue");
  }

  const queue = new Queue();
  let nextSourceOne = sourceOne.peek();
  let nextSourceTwo = sourceTwo.peek();
  while (!isUndefined(nextSourceOne) || !isUndefined(nextSourceTwo)) {
    if (!isUndefined(nextSourceOne)) {
      queue.add(sourceOne.remove());
    }

    if (!isUndefined(nextSourceTwo)) {
      queue.add(sourceTwo.remove());
    }

    nextSourceOne = sourceOne.peek();
    nextSourceTwo = sourceTwo.peek();
  }

  return queue;
}

module.exports = weave;
