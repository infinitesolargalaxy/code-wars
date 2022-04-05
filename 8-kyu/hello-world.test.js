const { assert } = require('chai');

describe('Testing function', () => {
  it('Is it a function?', () => {
    assert.strictEqual(typeof greet, 'function', 'greet should be a function');
  });
  it('Correct return-value?', () => {
    assert.strictEqual(greet(), 'hello world!');
  });
});

function greet() {
  return 'hello world!';
}
