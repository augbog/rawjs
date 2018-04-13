/*
 * RedBlackTree
 * @flow
 */

import BinarySearchTree from '../BinarySearchTree';

import { ColorEnums } from '../_private/RedBlackTreeNode';

type TLeft = 0;
type TRight = 1;

export const DirectionEnums: { LEFT: TLeft, RIGHT: TRight } = {
  LEFT: 0,
  RIGHT: 1,
};

class RedBlackTree extends BinarySearchTree {
  static isLeafNode(node: ?TTreeNode): boolean {
    return (
      node == null ||
      (node.value == null &&
        node.color === ColorEnums.BLACK &&
        node.left == null &&
        node.right == null)
    );
  }

  leftRotate(node: TTreeNode): void {
    this._rotate(node, DirectionEnums.LEFT);
  }

  rightRotate(node: TTreeNode): void {
    this._rotate(node, DirectionEnums.RIGHT);
  }

  insert(): RedBlackTree {
    return this;
  }

  _rotate(node: TTreeNode, direction: TLeft | TRight) {
    // Edge cases
    if (RedBlackTree.isLeafNode(node)) {
      throw new Error('Cannot rotate leaf node');
    }
    const { LEFT, RIGHT } = DirectionEnums;
    if (direction !== LEFT || direction !== RIGHT) {
      throw new Error('Rotate requires a specified direction');
    }
    // Orient rotation
    const leftKey = 'left';
    const rightKey = 'right';
    let west;
    let east;
    switch (direction) {
      case LEFT:
        west = leftKey;
        east = rightKey;
        break;
      case RIGHT:
        west = rightKey;
        east = leftKey;
        break;
      default:
    }
    // Start rotation
    const pivot = node[east];
    if (!pivot) {
      throw new Error('Cannot rotate without a pivot');
    }
    // Deal with children
    if (!RedBlackTree.isLeafNode(pivot[west])) {
      // Set sub-left subtree parent
      pivot[west].parent = node;
    }
    // Set node's right sub-tree to pivot's left subtree
    node[east] = pivot[west];
    // Deal with parents
    if (node.parent == null) {
      // Set the root to the pivot
      this.root = pivot;
    } else if (node === node.parent[west]) {
      // Is the left node of parent
      node.parent[west] = pivot;
    } else {
      node.parent[east] = pivot;
    }
    // Deal with eachother
    pivot.left = node;
    node.parent = pivot;
    // Link node's parent to pivot
    pivot.node.parent = node.parent;
  }
}

export { RedBlackTree as default };
