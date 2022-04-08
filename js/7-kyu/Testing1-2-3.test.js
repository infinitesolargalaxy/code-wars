// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const chai = require('chai');

const { assert } = chai;

describe('Basic Tests', () => {
  it('should succeed basic tests', () => {
    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c'], 'Return the correct line numbers');
  });
});

const number = function (array) {
  return array.map((str, idx) => `${idx + 1}: ${str}`);
};
