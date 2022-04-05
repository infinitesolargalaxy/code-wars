// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}

const { assert } = require('chai');

describe('minMax', () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]],
  ];
  for (const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }

  it('should work for random lists', () => {
    for (let i = 0; i < 100; ++i) {
      const arr = [];
      let min = Infinity;
      let max = -Infinity;
      let l = Math.floor(1 + Math.random() * 120);
      while (l-- > 0) {
        const t = Math.floor(Math.random() * 0xfffff - 0x8ffff);
        max = Math.max(t, max);
        min = Math.min(t, min);
        arr.push(t);
      }
      assert.deepEqual(minMax(arr.slice()), [min, max], `tested on ${JSON.stringify(arr)}`);
    }
  });
});
