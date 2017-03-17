'use strict'

class Node {
  constructor( data, next ) {
    this.data = data
    this.next = next
  }
}

export default class LinkedList{

  constructor(){
    this.currentLength = 0
    this.headNode = null
    this.tailNode = null
  }

  getHeadNode() {
    return this.headNode.data
  }
 
  getTailNode() {
    return this.tailNode.data
  }

  contains(item) {
    let currentNode = this.headNode

    while (currentNode.next !== null) {
      if (currentNode.data === item) return true

      currentNode = currentNode.next
    }

    return false
  }

  find(item) {
    let currentNode = this.headNode

    while (currentNode.next!== null){
      if (currentNode.data === item) return currentNode

      currentNode = currentNode.next
    }

    return -1
  }


  insert(item) {
    let currentNode = new Node(item, null)

    if (this.currentLength === 0) {
      this.headNode = currentNode
    }
    else if (this.currentLength === 1 ) {
      this.headNode.next = currentNode
      this.tailNode = currentNode
    }
    else {
      this.tailNode.next = currentNode
      this.tailNode = currentNode
    }

    this.currentLength ++
  }

  insertFirst(item) {
    let headNode = new Node(item, this.headNode)

    this.headNode = headNode

    this.currentLength++
  }

  insertBefore(data, existingData) {
    let currentNode = this.headNode
    let previousNode = null

    while (currentNode.data !== existingData){
      previousNode = currentNode
      currentNode = currentNode.next
    }

    previousNode.next = new Node(data, currentNode)

    this.currentLength++
  }

  insertAfter(data, existingData) {
    let currentNode = this.headNode
    let previousNode = null

    while (currentNode.data !== existingData){
      previousNode = currentNode
      currentNode = currentNode.next
    }

    currentNode.next = new Node(data, currentNode.next.next)

    this.currentLength++
  }

  remove() {
    if (this.tailNode === null) return null

    let currentNode = this.headNode
    let previousNode = null

    while (currentNode.next !== null){
      previousNode = currentNode
      currentNode = currentNode.next
    }

    this.tailNode = previousNode

    previousNode.next = null
    
    this.currentLength--
  }

  removeFirst() {
    if (this.currentLength === 0) return null
      
    this.headNode = this.headNode.next

    this.currentLength--
  }

  isEmpty() {
    return this.currentLength === 0 ? true : false
  }

  size() {
    return this.currentLength
  }

  clear() {
    while (this.currentLength > 0) {
      this.removeFirst()
    }
  }
}
