import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const findLargestPath = uri => {
  const tree = buildTriangleListFromFile(uri);

  const cache = new Map();
  return findLargestPathRecursive(tree, 0, 0);

  function findLargestPathRecursive(tree, i, j) {
    const mapKey = `${i}_${j}`;
    if (cache.has(mapKey)) {
      const res = cache.get(mapKey);
      cache.delete(mapKey);
      return res;
    }
    let result = tree[i][j];

    if (i === tree.length - 1) {
      if (tree[i][j - 1] || tree[i][j + 1])
        cache.set(mapKey, result);
      return result;
    }

    const leftBranch = findLargestPathRecursive(tree, i + 1, j);
    const rightBranch = findLargestPathRecursive(tree, i + 1, j + 1);
    if (leftBranch > rightBranch) {
      result += leftBranch;
    } else {
      result += rightBranch;
    }

    cache.set(mapKey, result);
    return result;
  }
};

const buildTriangleListFromFile = uri => {
  const data = readFileSync(uri, { encoding: 'utf-8' });
  return data.split('\n').map(row => row.split(' ').map(d => +d));
};

console.time('ex67');
let a = findLargestPath(resolve('files/p067_triangle.txt'));
console.timeEnd('ex67');
console.log(a);