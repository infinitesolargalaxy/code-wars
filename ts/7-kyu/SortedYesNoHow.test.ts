// https://www.codewars.com/kata/580a4734d6df748060000045/typescript

// import solution = require('./solution');

import { assert } from 'chai';

// Get first 2 numbers
// Determine ascending or descending
// If current number breaks pattern, then
export function isSortedAndHow(array:number[]): string {
  const ansNo = 'no';
  const ansAsc = 'yes, ascending';
  const ansDesc = 'yes, descending';
  if (array.length === 0) return ansNo;
  if (array.length === 1) return ansAsc;

  let prevNum = array[0];
  const isAsc = array[0] < array[1];
  for (let i = 2; i < array.length; i += 1) {
    if (isAsc && prevNum > array[i]) return ansNo;
    if (!isAsc && prevNum < array[i]) return ansNo;
    prevNum = array[i];
  }

  return isAsc ? ansAsc : ansDesc;
}

describe('isSortedAndHow', () => {
  it('[]', () => {
    assert.equal(isSortedAndHow([]), 'no');
  });

  it('[1, 2]', () => {
    assert.equal(isSortedAndHow([1, 2]), 'yes, ascending');
  });

  it('[15, 7, 3, -8]', () => {
    assert.equal(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });

  it('[4, 2, 30]', () => {
    assert.equal(isSortedAndHow([4, 2, 30]), 'no');
  });
});

describe('random tests', () => {
  it('random array 1', () => {
    const array = randomArray(7);
    const actual = isSortedAndHow(array.slice());
    const expected = isSortedAndHowSol(array);
    assert.equal(actual, expected);
  });

  it('random array 2', () => {
    const array = randomArray(57);
    const actual = isSortedAndHow(array.slice());
    const expected = isSortedAndHowSol(array);
    assert.equal(actual, expected);
  });

  it('random array 3', () => {
    const array = randomArray(184);
    const actual = isSortedAndHow(array.slice());
    const expected = isSortedAndHowSol(array);
    assert.equal(actual, expected);
  });

  it('random array 4', () => {
    const array = randomArray(7392);
    const actual = isSortedAndHow(array.slice());
    const expected = isSortedAndHowSol(array);
    assert.equal(actual, expected);
  });

  it('random array 5', () => {
    const array = randomArray(12345);
    const actual = isSortedAndHow(array.slice());
    const expected = isSortedAndHowSol(array);
    assert.equal(actual, expected);
  });

  function randomArray(size:number):number[] {
    const array = []; for (let i = 0; i < size; i++) array.push(randomInt(10000, 20001));
    const x = randomInt(0, 5);
    if (x === 1 || x === 2) array.sort((a, b) => a - b);
    else if (x === 3 || x === 4) array.sort((a, b) => b - a);
    return array;
  }

  function randomInt(min:number, max:number):number {
    return Math.floor(min + Math.random() * max);
  }

  function isSortedAndHowSol(array:number[]):string {
    const asc = array.slice(); asc.sort((a, b) => a - b);
    const desc = array.slice(); desc.sort((a, b) => b - a);
    if (shallowEquals(array, asc)) {
      return 'yes, ascending';
    }
    if (shallowEquals(array, desc)) {
      return 'yes, descending';
    }
    return 'no';
  }

  function shallowEquals(a1:number[], a2:number[]) : boolean {
    return a1 === a2 || (a1.length === a2.length && a1.every((e, i) => e === a2[i]));
  }
});
