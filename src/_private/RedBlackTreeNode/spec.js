import { expect } from 'chai';

import RedBlackTreeNode, { ColorEnums } from './';
import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('RedBlackTreeNode', () => {
  let value;
  let node;
  beforeEach(() => {
    value = '√';
    node = new RedBlackTreeNode(value);
  });
  it('inherits from a BST node', () => {
    expect(node).to.be.an.instanceof(RedBlackTreeNode);
    expect(node).to.be.an.instanceof(BinarySearchTreeNode);
  });
  it('has a color', () => {
    expect(node).to.have.own.property('color');
  });
  it('defaults color to black', () => {
    expect(node).to.have.own.property('color', ColorEnums.BLACK);
  });
});
