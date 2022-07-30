import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export const ex42 = () => {
  let n = 0;
  const triangularNumers = new Set();
  let lastTriangular = 0;
  return getWordsFromFile(resolve('files/p042_words.txt'))
    .map(w => getWordValue(w))
    .reduce((counter, v) => {
      if (triangularNumers.has(v)) return counter + 1;
      while (lastTriangular < v) {
        lastTriangular = t(n++);
        triangularNumers.add(lastTriangular);
      }
      return counter + ((v === lastTriangular) ? 1 : 0);
    }, 0);
};

const t = n => 0.5 * n * (n + 1);

const getWordsFromFile = uri => readFileSync(uri, { encoding: 'utf8' }).split(',').map(w => w.slice(1, -1));

const getLetterIndex = c => c.toLowerCase().charCodeAt(0) - 96;

const getWordValue = w => [...w].map(c => getLetterIndex(c)).reduce((acc, c) => acc + c);