const {
  NotImplementedError,
  checkForNotThrowingErrors,
} = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head;
  tail;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newVal = new ListNode(value);

    if (this.tail) {
      this.tail.next = newVal;
      this.tail = newVal;
    } else {
      this.head = newVal;
      this.tail = newVal;
    }
  }

  dequeue() {
    let currElment = this.head.value;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else this.head = this.head.next;

    return currElment;
  }
}

module.exports = {
  Queue,
};
