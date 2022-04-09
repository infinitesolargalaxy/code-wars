// https://www.codewars.com/kata/539ee3b6757843632d00026b

import chai, { assert } from 'chai';

chai.config.truncateThreshold = 0;

// Filter to capitals
// Map to index

// export function capitals (word: string): number[] {
//   return [] as number[];
// }

export function capitals(word: string): number[] {
  const idxArray: number[] = [];
  word.split('').forEach((char, idx) => {
    if (char === char.toUpperCase()) idxArray.push(idx);
  });
  return idxArray;
}

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
  });
});

describe('Random tests', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function solution(word: string) {
    return word.split('').reduce((result, char, index) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        result.push(index);
      }

      return result;
    }, [] as number[]);
  }

  it('Testing for 20 random tests', () => {
    for (let i = 0; i < 20; i++) {
      const shuffled = alphabet.split('').sort(() => Math.random() - 0.5);
      const word = shuffled.slice(0, 10).join('');
      assert.deepEqual(capitals(word), solution(word), `Testing for word = ${JSON.stringify(word)}`);
    }
  });
});
