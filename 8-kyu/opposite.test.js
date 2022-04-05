const { assert } = require('chai');

describe('Testing function', () => {
  it('Is it a function?', () => {
    assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
  });
  it('opposite(1), -1,', () => {
    assert.strictEqual(opposite(1), -1);
  });
  it('opposite(0), 0,', () => {
    assert.strictEqual(opposite(0), 0);
  });
  it('opposite(4.25), -4.25,', () => {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it('opposite(3.3333333), -3.3333333,', () => {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it('opposite(-12525220.3325), 12525220.3325,', () => {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it('opposite(-5), 5,', () => {
    assert.strictEqual(opposite(-5), 5);
  });
});

describe('Random tests', () => {
  const generateRandom = (min, max) => Math.random() * (max - min + 1) + min;
  const opposite_sol = (number) => -number;
  for (let i = 0; i < 40; i++) {
    const randomNumber = generateRandom(0, 100);
    const expected = opposite_sol(randomNumber);
    it(`Testing for opposite(${randomNumber})`, () => {
      assert.strictEqual(opposite(randomNumber), expected);
    });
  }
});

function opposite(number) {
  return number * -1;
}
