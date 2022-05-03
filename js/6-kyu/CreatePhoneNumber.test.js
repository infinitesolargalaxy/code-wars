// https://www.codewars.com/kata/525f50e3b73515a6db000b83

// function createPhoneNumber(numbers){
//   let phoneNumber = '(';
//   numbers.forEach((num, idx) => {
//     phoneNumber += num;
//     if (idx === 2) phoneNumber += ') '
//     if (idx === 5) phoneNumber += '-'
//   });
//   return phoneNumber;
// }

import chai, { config } from 'chai';
/**
 * @param {string | any[]} numbers
 */
function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx';

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

const { assert } = chai;
config.truncateThreshold = 0;

describe('Create Phone Number', () => {
  it('Fixed tests', () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111');
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
  });

  it('Random tests', () => {
    const sol = (/** @type {any[]} */ a) => `(${a.slice(0, 3).join('')}) ${a.slice(3, 6).join('')}-${a.slice(6).join('')}`;
    for (let i = 0; i < 100; i++) {
      const a = Array.from({ length: 10 }, (_) => Math.floor(Math.random() * 10));
      const exp = sol(a);
      assert.strictEqual(createPhoneNumber(a), exp, `Testing for numbers = ${JSON.stringify(a)}`);
    }
  });
});
