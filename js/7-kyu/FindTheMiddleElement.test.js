// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

const { strictEqual } = require('chai').assert;

function doTest(triplet, expected) {
  const actual = gimme(triplet);
  strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
}

describe('Basic Test', () => {
  it('Tests for integers', () => {
    doTest([2, 3, 1], 0);
    doTest([5, 10, 14], 1);
  });
  it('Tests for floats', () => {
    doTest([2.1, 3.2, 1.4], 0);
    doTest([5.9, 10.4, 14.2], 1);
  });
  it('Tests for negative numbers', () => {
    doTest([-2, -3, -1], 0);
    doTest([-5, -10, -14], 1);
  });
  it('Tests for mixed numbers', () => {
    doTest([-2, -3.2, 1], 0);
    doTest([-5.2, -10.6, 14], 0);
  });
});

// Loop through once, tracking the largest, smallest, and middle value
// Get index of middle
function gimme(triplet) {
  const sortedTriplet = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(sortedTriplet[1]);
}
