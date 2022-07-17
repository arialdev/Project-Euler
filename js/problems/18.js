import { readFile } from 'node:fs';
import { resolve } from 'node:path';

const findLargestPath = (uri) => {
  return buildTriangleListFromFile(uri).then(({ tree, maxDigit }) => {
    // return findPathRecursive(tree, 0, 0, -1, +'9'.repeat(maxDigit));
    return findPathRecursive(tree, 0, 0, -1, 50);
  });

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

const buildTriangleListFromFile = uri => {
  return new Promise(resolve => {
    readFile(uri, { encoding: 'utf-8' }, (_, data) => {
      let maxDigit = 0;
      let tree = [];
      data.split('\n').map((row, i) => row.split(' ').forEach(n => {
        maxDigit = Math.max(maxDigit, n.length);
        (tree[i] ??= []).push(+n);
      }));
      resolve({ tree, maxDigit });
    });
  });
};


// let a = findLargestPath(resolve('files/18.input.txt'));
let a = findLargestPath(resolve('files/p067_triangle.txt'));
a.then(console.log)