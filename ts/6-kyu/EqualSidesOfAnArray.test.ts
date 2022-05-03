// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript

import { assert } from 'chai';

export function findEvenIndex(arr: number[]): number {
  function sum(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  }

  for (let i = 0; i < arr.length; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length))) {
      return i;
    }
  }
  return -1;
}

describe('Basic FindEvenIndex', () => {
  it('Tests', () => {
    assert.equal(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, 'The array was: [1,2,3,4,3,2,1] \n');
    assert.equal(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, 'The array was: [1,100,50,-51,1,1] \n');
    assert.equal(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, 'The array was: [1,2,3,4,5,6] \n');
    assert.equal(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, 'The array was: [20,10,30,10,10,15,35] \n');
  });
});

describe('FindEvenIndex', () => {
  it('Tests', () => {
    assert.equal(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, 'The array was: [1,2,3,4,3,2,1] \n');
    assert.equal(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, 'The array was: [1,100,50,-51,1,1] \n');
    assert.equal(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, 'The array was: [1,2,3,4,5,6] \n');
    assert.equal(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, 'The array was: [20,10,30,10,10,15,35] \n');
    assert.equal(findEvenIndex([20, 10, -80, 10, 10, 15, 35]), 0, 'The array was: [20,10,-80,10,10,15,35] \n');
    assert.equal(findEvenIndex([10, -80, 10, 10, 15, 35, 20]), 6, 'The array was: [10,-80,10,10,15,35,20] \n');
    assert.equal(findEvenIndex([8, 8]), -1, 'The array was: [8,8]');
    assert.equal(findEvenIndex([8, 0]), 0, 'The array was: [8,0]');
    assert.equal(findEvenIndex([0, 8]), 1, 'The array was: [0,8]');
    assert.equal(findEvenIndex([7, 3, -3]), 0, 'The array was: [7,3,-3]');
    assert.equal(findEvenIndex([8]), 0, 'The array was: [8]');
  });
});
describe('50 Random tests', () => {
  //----------------
  function randint(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function findEvenIndexT(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
      const list1 = arr.slice(0, i);
      const list2 = arr.slice(i + 1, arr.length);
      if (addArrayT(list1) == addArrayT(list2)) {
        return i;
      }
    }
    return -1;
  }
  function addArrayT(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  //----------------
  for (let i = 0; i < 50; i++) {
    const tOrF = randint(1, 2);
    const rando = randint(2, 500);
    let index = 0;
    const output: number[] = [];
    for (let j = 0; j < rando; j++) {
      const x = randint(-10000, 10000);
      output.push(x);
    }
    if (tOrF == 1) {
      index = randint(1, output.length - 1);
      const list1 = output.slice(0, index);
      const list2 = output.slice(index + 1, output.length);
      output.push(addArrayT(list1) - addArrayT(list2));
    }
    const duplicate = output.slice(0);
    it('Random Testing', () => {
      assert.equal(findEvenIndex(duplicate), findEvenIndexT(output), `Your answer failed on: ${output.toString()}\n`);
    });
  }
});
