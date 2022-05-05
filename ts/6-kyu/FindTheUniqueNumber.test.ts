// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
import { assert } from 'chai';

export function findUniq(arr: number[]): number {
  // Do the magic
  const countMap = {} as any;
  const comparisonNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!(num in countMap)) {
      countMap[num] = 0;
    }
    countMap[num] += 1;

    if (comparisonNum !== num) {
      // Check if we can terminate early
      if (countMap[comparisonNum] !== countMap[num]) {
        if (countMap[comparisonNum] === 1) {
          return comparisonNum;
        }
        if (countMap[num] === 1) {
          return num;
        }
      }
    }

    if (i >= 2) {
      // Check for early return
      const keys = Object.keys(countMap);
      if (keys.length > 1) {
        const num1 = keys[0];
        const num2 = keys[1];
        if (countMap[num1] !== countMap[num2]) {
          if (countMap[num1] === 1) {
            return Number(num1);
          }
          if (countMap[num2] === 1) {
            return Number(num2);
          }
        }
      }
    }
  }

  // Object.entries(countMap).forEach((value, key) => {
  //   if (value == 1) {
  //     return key;
  //   }
  // });
  return arr[0];
}

// export function findUniq(arr: Array<number>): number {
//   arr.sort();
//   return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
// }

describe('findUniq', () => {
  it('should handle sample cases', () => {
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([0, 0, 0.55, 0, 0]), 0.55);
  });

  it('should handle basic cases', () => {
    // Basic tests (shuffled)
    assert.strictEqual(findUniq([4, 4, 4, 3, 4, 4, 4, 4]), 3);
    assert.strictEqual(findUniq([5, 5, 5, 5, 4, 5, 5, 5]), 4);
    assert.strictEqual(findUniq([6, 6, 6, 6, 6, 5, 6, 6]), 5);
    assert.strictEqual(findUniq([7, 7, 7, 7, 7, 7, 6, 7]), 6);
    // The last item
    assert.strictEqual(findUniq([8, 8, 8, 8, 8, 8, 8, 7]), 7);
    assert.strictEqual(findUniq([3, 3, 2, 3, 3, 3, 3, 3]), 2);
    assert.strictEqual(findUniq([2, 1, 2, 2, 2, 2, 2, 2]), 1);
    // The first item
    assert.strictEqual(findUniq([0, 1, 1, 1, 1, 1, 1, 1]), 0);
  });

  it('should handle edge cases', () => {
    // Very big number
    assert.strictEqual(findUniq(generateTestArr(2 ** 40, 2 ** 50, 100)), 2 ** 40);

    // Negative number
    assert.strictEqual(findUniq(generateTestArr(-1, 1, 1000)), -1);

    // Float number
    assert.strictEqual(findUniq(generateTestArr(0.0000001, 0.0010001, 1000)), 0.0000001);

    // Infitiy and -Infiity
    assert.strictEqual(findUniq(generateTestArr(-Infinity, Infinity, 1000)), -Infinity);
  });

  it('should handle huge array', () => {
    assert.strictEqual(findUniq(generateTestArr(42, 24, 10000000)), 42);
  });

  it('should handle random case', () => {
    const a = Math.random();
    const b = Math.random();
    assert.strictEqual(findUniq(generateTestArr(a, b, 1000)), a);
  });
});

function generateTestArr(answer: number, mass: number, length: number): Array<number> {
  const arr = [];
  // Generate random integer in [0, length)
  const answerIndex = Math.floor(Math.random() * length);

  // Fill the array with mass and answer
  for (let i = 0; i < length; i++) {
    // Answer will be on answerIndex
    arr.push(i === answerIndex ? answer : mass);
  }

  return arr;
}
