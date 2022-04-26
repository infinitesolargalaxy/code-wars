// https://www.codewars.com/kata/59557b2a6e595316ab000046
function convertHashToArray(hash) {
  const arr = Object.keys(hash).map((key) => [key, hash[key]]);
  arr.sort((a, b) => a[0].localeCompare(b[0]));
  return arr;
}

const chai = require('chai');

const { assert } = chai;

describe('Basic tests', () => {
  it('Basic tests', () => {
    assert.deepEqual(convertHashToArray({ name: 'Jeremy' }), [['name', 'Jeremy']]);
    assert.deepEqual(convertHashToArray({ name: 'Jeremy', age: 24 }), [['age', 24], ['name', 'Jeremy']]);
    assert.deepEqual(convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }), [['age', 24], ['name', 'Jeremy'], ['role', 'Software Engineer']]);
    assert.deepEqual(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 }), [['powerLevelOver', 9000], ['product', 'CodeWars']]);
    assert.deepEqual(convertHashToArray({}), []);
  });
});
