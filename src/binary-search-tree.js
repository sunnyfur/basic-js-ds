const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootV = null;
  }

  root() {
    return this.rootV;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.root()) {
      let currNode = this.root();
      let prevNode = this.root();

      while (currNode) {
        if (currNode.data > data) {
          prevNode = currNode;
          currNode = currNode.left;
        } else {
          prevNode = currNode;
          currNode = currNode.right;
        }
      }
      if (prevNode.data > data) {
        prevNode.left = newNode;
      } else if (prevNode.data < data) {
        prevNode.right = newNode;
      }
    } else {
      this.rootV = newNode;
    }
  }

  has(data) {
    let currNode = this.root();
    while (currNode) {
      if (currNode.data == data) {
        return true;
      }
      if (currNode.data > data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currNode = this.root();

    while (currNode) {
      if (currNode.data == data) {
        return currNode;
      }
      if (currNode.data > data) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }

    return null;
  }

  remove(data) {
    let currNode = this.root();
    let prev = null;
    let trLeft = null;
    let trRight = null;
    let from = "";
    while (currNode) {
      if (currNode.data == data) {
        trLeft = currNode.left;
        trRight = currNode.right;
        if (trLeft && trRight) {
          let currMin = trRight;
          let prevMin = trRight;
          while (currMin.left) {
            prevMin = currMin;
            currMin = currMin.left;
          }
          currNode.data = currMin.data;
          currNode.left = trLeft;
        } else {
          if (trLeft) {
            if (from == "left") {
              prev.left = trLeft;
            } else {
              prev.right = trLeft;
            }
          } else {
            if (from == "left") {
              prev.left = trRight;
            } else {
              prev.right = trRight;
            }
          }
        }
        break;
      }
      if (currNode.data > data) {
        prev = currNode;
        currNode = currNode.left;
        from = "left";
      } else {
        prev = currNode;
        currNode = currNode.right;
        from = "right";
      }
    }
  }

  min() {
    let currNode = this.root();
    do {
      currNode = currNode.left;
    } while (currNode.left);
    return currNode.data;
  }

  max() {
    let currNode = this.root();
    do {
      currNode = currNode.right;
    } while (currNode.right);
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
