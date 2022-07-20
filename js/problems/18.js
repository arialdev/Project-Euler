import { readFile } from 'node:fs';
import { resolve } from 'node:path';

const findLargestPath = (uri) => {
  return buildTriangleListFromFile(uri).then(tree => findPathRecursive(tree, 0, 0, -1, 99));

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
  return new Promise(resolve => {
    readFile(uri, { encoding: 'utf-8' }, (_, data) => {
      const tree = data.split('\n').map(row => row.split(' ').map(d => +d));
      resolve(tree);
    });
  });
};

let a = findLargestPath(resolve('files/18.input.txt'));
a.then(console.log)