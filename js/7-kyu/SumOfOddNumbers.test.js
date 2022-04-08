const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    rowSumOddNumbers(1);
    rowSumOddNumbers(2);
    rowSumOddNumbers(3);
    rowSumOddNumbers(4);
    rowSumOddNumbers(5);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});

function rowSumOddNumbers(n) {
  // Generate list of odd numbers at that part of tree
  // Sum those together

  // First num is growing by 2 each iteration
  // numOne = numOne[n - 1] + 2(n - 1)
  // 1, 3, 7, 13, 21

  let numOne = 1;
  for (let i = 1; i < n; i++) {
    numOne += 2 * (n - i);
  }
  //   console.log(numOne);

  // There are n numbers: numOne, numOne + 2, ..., numOne + 2(n - 1)
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += numOne;
    numOne += 2;
  }
  return sum;
//   console.log(sum);
}
