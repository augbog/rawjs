import { expect } from 'chai';

import RedBlackTree from './';
import BinarySearchTree from '../BinarySearchTree';

describe('RedBlackTree', () => {
  let rbt;
  let bst;
  beforeEach(() => {
    rbt = new RedBlackTree();
    bst = new BinarySearchTree();
  });
  it('inherits from a BinarySearchTree', () => {
    expect(rbt).to.be.an.instanceOf(RedBlackTree);
    expect(rbt).to.be.an.instanceOf(BinarySearchTree);
  });
  describe.skip('insert', () => {
    it('inherits some of its methods', () => {
      expect(rbt.get).to.equal(bst.get);
    });
    it('has its own insert method', () => {
      expect(rbt.insert).to.not.equal(bst.insert);
    });
    it('REQUIRES SELF_CORRECT TO BE IMPLEMENTED');
  });
  describe.skip('rotateLeft', () => {
    it('returns nothing');
    it('throws an error if trying to rotate a node with no pivot');
    it('REQUIRES INSERT TO BE IMPLEMENTED');
  });
  describe.skip('rotateRight', () => {
    it('does the opposite of rotateLeft');
    // rotateRight and rotateLeft should both call rotate with seperate arguments
    // that inverts the behavor.
  });
  describe.skip('selfCorrect', () => {
    it('REQUIRES ROTATE_LEFT & ROTATE_RIGHT to be implemented');
  });
});
