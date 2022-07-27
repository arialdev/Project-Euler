import { readFileSync } from 'node:fs';
import { resolve } from 'node:path'

const getNameListFromURI = uri => {
  return readFileSync(uri, { encoding: 'utf-8' })
    .split(',')
    .map(w => w.slice(1, -1))
    .sort((a, b) => a.localeCompare(b))
    .map(w => [...w]
      .map(c => c.charCodeAt(0) - 64)
      .reduce((acc, c) => acc + c)
    )
    .reduce((acc, e, i) => acc + e * (i + 1));
};

export const ex22 = getNameListFromURI.bind(this, resolve('files/p022_names.txt'));