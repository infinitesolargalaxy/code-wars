// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

// Start with the bound, check if divisible by divisor
// Decrease bound by 1...
function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i -= 1) {
    if (i % divisor === 0) return i;
  }
  // By math laws, everything is divisible by 1...
  return 1;
}

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(maxMultiple(2, 7), 6);
    assert.strictEqual(maxMultiple(3, 10), 9);
    assert.strictEqual(maxMultiple(7, 17), 14);
    assert.strictEqual(maxMultiple(10, 50), 50);
    assert.strictEqual(maxMultiple(37, 200), 185);
    assert.strictEqual(maxMultiple(7, 100), 98);
  });
});

describe('Random tests', () => {
  const sol = (d, b) => ~~(b / d) * d;

  it('Testing for 100 random tests', () => {
    for (let i = 0; i < 100; i++) {
      const d = Math.floor(Math.random() * 1000) + 1;
      const b = Math.floor(Math.random() * 1001001) + 1000;
      assert.strictEqual(maxMultiple(d, b), sol(d, b), `Testing for ${d} and ${b}`);
    }
  });
});
