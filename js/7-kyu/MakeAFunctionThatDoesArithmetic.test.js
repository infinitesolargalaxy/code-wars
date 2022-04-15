// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

// function arithmetic(a, b, operator) {
//   // const add = (num1, num2) => num1 + num2;
//   const arithmeticFunctions = ['add'];

//   // this.add = add;
//   this.add = function(num1, num2) {
//     return num1 + num2;
//   }

//   // if (!Object.keys(arithmeticFunctions).includes(operator)) return 0; // Error
//   return (this[operator])(a, b);
// }

function arithmetic(a, b, operator) {
  if (operator === 'add') return a + b;
  if (operator === 'subtract') return a - b;
  if (operator === 'multiply') return a * b;
  if (operator === 'divide') return a / b;
}

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(arithmetic(1, 2, 'add'), 3, "'add' should return the two numbers added together!");
    assert.strictEqual(arithmetic(8, 2, 'subtract'), 6, "'subtract' should return a minus b!");
    assert.strictEqual(arithmetic(5, 2, 'multiply'), 10, "'multiply' should return a multiplied by b!");
    assert.strictEqual(arithmetic(8, 2, 'divide'), 4, "'divide' should return a divided by b!");
  });
});
