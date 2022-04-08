// https://www.codewars.com/kata/539ee3b6757843632d00026b

import chai, { assert } from 'chai';

chai.config.truncateThreshold = 0;

// Filter to capitals
// Map to index
const capitals = function (word) {
  // Write your code here
  const idxArray = [];
  word.split('').forEach((char, idx) => {
    if (char === char.toUpperCase()) idxArray.push(idx);
  });
  return idxArray;
};

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
  });
});

describe('Random tests', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const solution = function (word) {
    return word.split('').reduce((result, char, index) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        result.push(index);
      }

      return result;
    }, []);
  };

  it('Testing for 20 random tests', () => {
    for (let i = 0; i < 20; i++) {
      const shuffled = alphabet.split('').sort(() => Math.random() - 0.5);
      const word = shuffled.slice(0, 10).join('');
      assert.deepEqual(capitals(word), solution(word), `Testing for word = ${JSON.stringify(word)}`);
    }
  });
});
