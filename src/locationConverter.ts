import { makeTree } from './makeIdsTree';

const ids = '⿰⿱卯金刂';

const tree = JSON.stringify(makeTree(ids), null, 4);
console.log(tree);

interface Location {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}
