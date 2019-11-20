// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  /* if (!(list instanceof LinkedList)) {
    throw new TypeError("list argument should be a LinkedList");
  } else */ if (
    typeof n !== "number" ||
    !Number.isInteger(n) ||
    n < 0
  ) {
    throw new TypeError("space argument should be an integer >= 0");
  }

  let slow = list.head;
  let fast = list.head;

  for (let i = 0; i < n && fast; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
