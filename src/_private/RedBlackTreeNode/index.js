/*
 * RedBlackTreeNode
 * @flow
 */

import BinarySearchTreeNode from '../BinarySearchTreeNode';

type TRed = 0;
type TBlack = 1;

const ColorEnums: { RED: TRed, BLACK: TBlack } = {
  RED: 0,
  BLACK: 1,
};

class RedBlackTreeNode extends BinarySearchTreeNode {
  color: TRed | TBlack;
  left: ?TTreeNode;
  right: ?TTreeNode;
  constructor(value: any) {
    super(value);
    this.color = ColorEnums.BLACK;
  }
}

export { RedBlackTreeNode as default, ColorEnums };
