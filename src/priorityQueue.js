'use strict'

class PriorityNode {
  constructor( data, priority, next ) {
    this.data = data
    this.priority = priority
    this.next = null
  }

  getData() {
    return this.data
  }

  getNext() {
    return this.next
  }

  setNext(node) {
    this.next = node
  }

  getPriority() {
    return this.priority
  }

  setPriority(priority) {
    this.priority = priority
  }
}

export default class PriorityQueue {
  constructor() {
    this.headNode = null
    this.tailNode = null
    this.currentLength = 0
  }

  enqueue( data, priority ) {
    let node = new PriorityNode(data, priority)
    let currentHeadNode = this.headNode

    if (this.currentLength === 0) {
      this.headNode = node
    } else if (this.currentLength === 1) {
      if (this.headNode.priority > priority) {
        this.headNode.next = node
        this.tailNode = node        
      } else {
        this.headNode = node
        this.headNode.next = currentHeadNode
        this.tailNode = currentHeadNode
      }
    } else {
      let currentNode = this.headNode
      let previousNode = null

      if (currentNode.priority < priority) {
        this.headNode = node
        node.next = currentNode
      } else {
        while (currentNode.priority > priority) {
          previousNode = currentNode
          currentNode = currentNode.next
        }
        previousNode.next = node
        node.next = currentNode
      }

    }

    this.currentLength++
  }

  dequeue() {
    if ( this.isEmpty() ) return null

    let node = this.headNode

    this.headNode = node.getNext()
    this.currentLength--

    return node
  }

  front() {
    if ( this.isEmpty() ) return null

    return this.headNode.data
  }

  back() {
    if ( this.isEmpty() ) return null

    return this.tailNode.data
  }

  isEmpty() {
    return this.currentLength === 0 ? true : false
  }

  length() {
    return this.currentLength
  }

}
