// https://www.codewars.com/kata/5949481f86420f59480000e7

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even');
    assert.strictEqual(oddOrEven([1]), 'odd');
    assert.strictEqual(oddOrEven([]), 'even');
  });

  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even');
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even');
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even');
  });

  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even');
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even');
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even');
  });

  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd');
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd');
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd');
  });

  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd');
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd');
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd');
  });
});

describe('Random tests', () => {
  it('Even tests', () => {
    for (let i = 0; i < 40; i++) {
      const arr = generateEven();
      assert.strictEqual(oddOrEven(arr), 'even');
    }
  });

  it('Odd tests', () => {
    for (let i = 0; i < 40; i++) {
      const arr = generateOdd();
      assert.strictEqual(oddOrEven(arr), 'odd', `Testing for ${JSON.stringify(arr)}`);
    }
  });

  it('Mixed tests', () => {
    for (let i = 0; i < 40; i++) {
      const decision = rand(0, 9999999) % 2 ? 'odd' : 'even';
      const arr = decision == 'odd' ? generateOdd() : generateEven();
      assert.strictEqual(oddOrEven(arr), decision, `Testing for ${JSON.stringify(arr)}`);
    }
  });
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randEven() {
  let num = rand(1, 1000000);
  num = num % 2 === 0 ? num : num + 1;
  const sign = rand(0, 9999999) % 2 ? -1 : 1;
  return num * sign;
}

function generateEven() {
  const even = [];
  for (let i = 0; i < 10; i++) even.push(randEven());
  return even;
}

function randOdd() {
  let num = rand(1, 1000000);
  num = num % 2 == 0 ? num + 1 : num;
  const sign = rand(0, 9999999) % 2 ? -1 : 1;
  return num * sign;
}

function generateOdd() {
  const odd = [randOdd()];
  for (let i = 0; i < 10; i++) odd.push(randOdd());
  return odd;
}

// Handle edge case of empty array
// Sum array, check if array's value is odd or even
function oddOrEven(array) {
  // if (array.length === 0) return 'even';
  return array.reduce((acc, num) => acc + num, 0) % 2 === 0 ? 'even' : 'odd';
}

function sum(array) {
  return array.reduce((acc, num) => acc + num);
}
