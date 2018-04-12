import { expect } from 'chai';
import BinarySearchTreeNode from './';

describe('BinarySearchTreeNode', () => {
  let value;
  let node;
  beforeEach(() => {
    value = '√';
    node = new BinarySearchTreeNode(value);
  });
  it('has a value', () => {
    expect(node).to.have.property('value', value);
  });
  it('can have a parent node', () => {
    expect(node).to.have.property('parent', null);
  });
  it('can have a left node', () => {
    expect(node).to.have.property('left', null);
  });
  it('can have a right node', () => {
    expect(node).to.have.property('right', null);
  });
});
