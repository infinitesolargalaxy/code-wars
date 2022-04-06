// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
const { assert } = require('chai');

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((str1, str2) => str1.length - str2.length);
}

describe('Example tests', () => {
  it('Test 1', () => {
    assert.deepEqual(sortByLength(['Beg', 'Life', 'I', 'To']), ['I', 'To', 'Beg', 'Life']);
  });
  it('Test 2', () => {
    assert.deepEqual(sortByLength(['', 'Moderately', 'Brains', 'Pizza']), ['', 'Pizza', 'Brains', 'Moderately']);
  });
  it('Test 3', () => {
    assert.deepEqual(sortByLength(['Longer', 'Longest', 'Short']), ['Short', 'Longer', 'Longest']);
  });
});
