const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    if (this._root) {
      let node = this._root

      while (true) {
        if (node.data > data) {
          if (node.left === null) {
            node.left = new Node(data)
            return true
          } else {
            node = node.left
          }
        } else if (node.data < data) {
          if (node.right === null) {
            node.right = new Node(data)
            return true
          } else {
            node = node.right
          }
        }
      }
    } else {
      this._root = new Node(data)

      return true
    }
  }

  has(data) {
    let node = this._root

    while (true) {
      if (node.data > data) {
        if (node.left) {
          node = node.left
        } else {
          return false
        }
      } else if (node.data < data) {
        if (node.right) {
          node = node.right
        } else {
          return false
        }
      }

      if (node.data === data) return true
    }
  }

  find(data) {
    let node = this._root

    while (true) {
      if (node.data > data) {
        if (node.left) {
          node = node.left
        } else {
          return null
        }
      } else if (node.data < data) {
        if (node.right) {
          node = node.right
        } else {
          return null
        }
      }

      if (node.data === data) return node
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data)

    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      }
      if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      }

      if (!node.left && !node.right) {
        return null
      }

      if (!node.left) {
        return node.right
      }

      if (!node.right) {
        return node.left
      }

      let maxLeftNode = node.left
      while (maxLeftNode.right) {
        maxLeftNode = maxLeftNode.right
      }

      node.data = maxLeftNode.data
      node.left = removeNode(node.left, maxLeftNode.data)
      return node
    }
  }

  min() {
    if (!this._root) return null

    let node = this._root

    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this._root) return null

    let node = this._root

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}
