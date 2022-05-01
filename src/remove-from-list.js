const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  const index = findIndex(list, k);

  if (index < 0) { return }

  if (index === 0) {
    list = list.next;
    return removeKFromList(list, k);
  } else {
    let prev = null;
    let current = list;

    for (let i = 0; i < index; i += 1) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
   
    if (current.next !== null && current.next.value === k) {
      current = current.next;
      prev.next = current.next;
    }
  }

  return list;
}

function findIndex(l, k) {
  let list = l;
  let index = 0;

  while (list.value) {
    if (list.value === k) {
      return index;
    } else {
      list = list.next;
    }
    index += 1;
  }

  return -1;
}

module.exports = {
  removeKFromList
};
