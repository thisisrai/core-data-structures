// 'use strict'

// class PriorityNode {
//   constructor( data, priority, next ) {
//     this.data = data
//     this.priority = priority
//     this.next = next
//   }

//   getData() {
//     return this.data
//   }

//   getNext() {
//     return this.next
//   }

//   setNext(node) {
//     this.next = node
//   }

//   getPriority() {
//     return this.priority
//   }

//   setPriority(priority) {
//     this.priority = priority
//   }
// }

// export default class PriorityQueue {
//   constructor() {
//     this.frontNode = null
//     this.backNode = null
//     this.currentLength = 0
//   }
// // FIFO
//   enqueue( data, priority ) {
//     let stack = []
//     let newNode = new PriorityNode(data, priority)

//     if ( this.isEmpty() ) {
//       this.frontNode = newNode
//       this.backNode = newNode
//     } else {
//         // console.log('=-=-=-=-=-=-', this.frontNode.priority)
//       while(this.frontNode.getPriority() >= priority) {
//         stack.unshift(this.)
//         this.dequeue()
//       }

//       stack.forEach(function(node) {
//         node.next = this.frontNode 
        
//         this.enqueue(node)
//       })
//     }

//     this.currentLength++
//   }

//   dequeue() {
//     if ( this.isEmpty() ) return null

//     let node = this.frontNode

//     this.frontNode = node.getNext()
//     this.currentLength--

//     return node
//   }

//   front() {
//     if ( this.isEmpty() ) return null

//     return this.frontNode.data
//   }

//   back() {
//     if ( this.isEmpty() ) return null

//     return this.backNode.data
//   }

//   isEmpty() {
//     return this.currentLength === 0 ? true : false
//   }

//   length() {
//     return this.currentLength
//   }

// }
