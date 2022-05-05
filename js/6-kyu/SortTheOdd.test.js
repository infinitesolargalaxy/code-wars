// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// function sortArray(array) {
//   return array.sort((a, b) => {
//     return a % 2 != 0 ? b - a : 0;
//   });
// }

/**
 * Detect indices for odd and extract a subarray of such indices
 * Sort the odd array
 * Reiterate over the original array and only replace values in the odd indices
 * Return
 */

function sortArray(array) {
  const oddArray = [];
  const oddIndices = [];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num % 2 === 0) {
      continue;
    }
    oddArray.push(num);
    oddIndices.push(i);
  }
  oddArray.sort((a, b) => a - b);

  const newArray = [...array];
  oddArray.forEach((num, j) => {
    const idx = oddIndices[j];
    newArray[idx] = num;
  });
  return newArray;
}

function sortArray2(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Sample Tests', () => {
  it('should pass some sample tests', () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]), []);
  });
});
