import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const findLargestPath = (uri) => {
  const tree = buildTriangleListFromFile(uri);
  return findPathRecursive(tree, 0, 0, -1, 99);

  function findPathRecursive(tree, i, j, best, maxDigit) {
    if (i === tree.length - 1) return tree[i][j];
    let maxLeft = -1, maxRight = -1;

    if (tree[i + 1][j] + maxDigit * (tree.length - 1 - i) > best)
      maxLeft = findPathRecursive(tree, i + 1, j, best, maxDigit)
    if (tree[i + 1][j + 1] + maxDigit * (tree.length - 1 - i) > best)
      maxRight = findPathRecursive(tree, i + 1, j + 1, best, maxDigit)
    return tree[i][j] + Math.max(maxLeft, maxRight);
  }
};

export const buildTriangleListFromFile = uri => {
  const data = readFileSync(uri, { encoding: 'utf-8' });
  return data.split('\n').map(row => row.split(' ').map(d => +d));
};

export const ex18 = findLargestPath.bind(this, resolve('files/18.input.txt'));