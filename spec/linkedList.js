import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {

  context('function', () => {
    it('is a function', () => {
      expect(LinkedList).to.be.a('function')
    })
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')
      expect(myLinkedList.getHeadNode()).to.equal('first')

    })

  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')
      expect(myLinkedList.getTailNode()).to.equal('third')

    })

  })

  context('contains()', () => {
    it('determines whether or not the list contains the provided data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')
      expect(myLinkedList.contains('second')).to.be.true
      expect(myLinkedList.contains('not true')).to.be.false

    })

  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', ()=>{
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')

      expect(myLinkedList.find('second').data).to.deep.equal('second')
      expect(myLinkedList.find('not true')).to.equal(-1)
    })

  })

  context('insert', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')
      myLinkedList.insert('fourth')
      myLinkedList.insert('Yay made it')

      expect(() => myLinkedList.insert('foo')).to.alter(() => myLinkedList.currentLength, { from: 5, to: 6 })
    })

  })

  context('insertFirst', () => {
    it('inserts a node (with the provided data) to the head of the list', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')
      myLinkedList.insert('fourth')
      myLinkedList.insert('Yay made it')
      myLinkedList.insertFirst('zero factor')

      expect(myLinkedList.headNode.data).to.equal('zero factor')
    })

  })

  context('insertBefore', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('mango')
      myLinkedList.insert('second')
      myLinkedList.insert('bananas')
      myLinkedList.insert('fourth')
      myLinkedList.insert('Yay made it')
      myLinkedList.insertBefore('apples', 'bananas')

      expect(myLinkedList.headNode.next.next.next.data).to.equal('apples')
    })

  })


  context('insertAfter', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('apples')
      myLinkedList.insert('second')
      myLinkedList.insert('third')
      myLinkedList.insert('fourth')
      myLinkedList.insert('Yay made it')
      myLinkedList.insertAfter('bananas', 'apples')

      expect(myLinkedList.headNode.next.next.data).to.equal('bananas')
    })

  })

  context('remove()', () => {
    it('Removes the tail node from the list', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('apples')
      myLinkedList.insert('second')
      myLinkedList.remove()

      expect(myLinkedList.tailNode.data).to.equal('apples')
    })
  })
  
  context('removeFirst()', () => {
    it('Removes the head node', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('first')
      myLinkedList.insert('second')
      myLinkedList.insert('third')

      myLinkedList.removeFirst()

      expect(myLinkedList.headNode.data).to.equal('second')
    })
  })

  context('isEmpty()', () => {
    it('returns true if list is empty and false otherwise', () => {
      const myLinkedList = new LinkedList()

      expect(myLinkedList.isEmpty()).to.be.true
    })
  })

  context('size()', () => {
    it('returns current length of list', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('one item')

      expect(myLinkedList.size()).to.equal(1)
    })
  })

  context('clear()', () => {
    it('returns true if list is empty and false otherwise', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('one')
      myLinkedList.insert('two')
      myLinkedList.insert('three')
      myLinkedList.insert('four')

      myLinkedList.clear()

      expect(myLinkedList.currentLength).to.equal(0)
    })
  })

})
