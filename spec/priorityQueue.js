import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('is a function', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the stack.', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('Lowest Priority: 10', 10)
      myQueue.enqueue('Mid priority: 15', 15)
      myQueue.enqueue('head node', 100)
      myQueue.enqueue('another', 25)

      expect(myQueue.headNode.data).to.equal('head node')
    })

  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('front')

      expect(() => myQueue.dequeue()).to.alter(() => myQueue.length(), { from: 1, to: 0 })
    })

    it('returns null if the stack is empty', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.dequeue()).to.be.null
    })
  })

  context('isEmpty()', () => {
    it('returns true when stack is empty.', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.isEmpty()).to.true
    })

    it('returns false when stack is loaded.', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('Car')

      expect(myQueue.isEmpty()).to.false
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('Car')
      myQueue.enqueue('MacBook')

      expect(myQueue.length()).to.equal(2)
    })
  })

  context('front()', () => {
    it('returns the front element of the queue or null if empty', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('front', 10)
      myQueue.enqueue('back', 5)

      expect(myQueue.front()).to.equal('front')
    })

    it('returns null if the stack is empty', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.front()).to.be.null
    })
  })

  context('back()', () => {
    it('returns the back element of the queue or null if empty', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('front', 10)
      myQueue.enqueue('back', 5)

      expect(myQueue.back()).to.equal('back')
    })

    it('returns null if the stack is empty', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.back()).to.be.null
    })
  })

})
