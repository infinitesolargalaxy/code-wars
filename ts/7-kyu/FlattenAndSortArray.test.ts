// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/typescript

// See https://www.chaijs.com for how to use Chai.
import { expect } from 'chai';

// Flatten first
// Sort
export function flattenAndSort(inputArray: number[][]): number[] {
  // Good luck, brave code warrior!
  const flatArray: number[] = [];
  inputArray.forEach((arr: number[]) => arr.forEach((num: number) => flatArray.push(num)));
  flatArray.sort((a, b) => a - b);
  return flatArray;
}

describe('flattenAndSort()', () => {
  it('should pass sample tests', () => {
    expect(flattenAndSort([])).to.deep.equal([]);
    expect(flattenAndSort([[], []])).to.deep.equal([]);
    expect(flattenAndSort([[], [1]])).to.deep.equal([1]);
    expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).to.deep.equal([1, 2, 3, 4, 5, 6, 100]);

    // TODO Add your tests here
  });
});

function generateRandomInteger(lowerBound: number, upperBound: number) {
  /*
   * Number, Number -> Number
   *
   * Given two number arguments denoting the lower bound and the upper bound
   * of the number to be generated respectively, returns a number that is
   * greater than or equal than the lower bound and less than the upper bound.
   */
  return Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound)));
}

function generateRandomArray(lowerBound: number, upperBound: number, count: number) {
  /*
   * Number, Number, Number -> Number
   *
   * Given three number denoting the lower bound, the upper bound
   * and the length of the array to be generated, returns an
   * array of length "count" and all of its values within range
   * from the lower bound (inclusive) to the upper bound (exclusive).
   */
  const result = [];
  for (let times = 0; times < count; ++times) {
    const randomValue = generateRandomInteger(lowerBound, upperBound);
    result.push(randomValue);
  }
  return result;
}

function unflattenArray(array: any[], splitCount: number) {
  /*
   * Array, Number -> Array
   *
   *
   * Given a one-dimensional array "array" and the number of splits to be made
   * upon it to produce a two-dimensional array "splitCount", returns a two-
   * dimensional array with all the values carried over from the original array
   * by shallow-copy with the length equal of the whole array equal to splitCount + 1.
   */
  const SPLIT_MAX_LENGTH = Math.floor(array.length / (splitCount + 1));
  const SPLIT_MIN_LENGTH = 1;
  const result = [];
  let startSplitIndex = 0;
  for (let times = 0; times <= splitCount; ++times) {
    const upperBound = startSplitIndex + SPLIT_MAX_LENGTH + 1;
    const lowerBound = startSplitIndex + SPLIT_MIN_LENGTH;
    const endSplitIndex = times == splitCount ? array.length : generateRandomInteger(lowerBound, upperBound);
    const subArray = array.slice(startSplitIndex, endSplitIndex);
    result.push(subArray);
    startSplitIndex = endSplitIndex;
  }
  return result;
}

interface TestCase {
  input: number[][];
  output: number[];
}

function generateTestObject(input: number[][], output: number[]): TestCase {
  /*
   * Basic test object to use for hard-coded testing.
   */
  return {
    input,
    output,
  };
}

function generateRandomTestObject(lowerBound: number, upperBound: number, count: number): TestCase {
  /*
   * Test object to use for random testing.
   */
  const randomArray = generateRandomArray(lowerBound, upperBound, count);
  const splitCount = generateRandomInteger(1, randomArray.length);

  return {
    input: unflattenArray(randomArray, splitCount),
    output: randomArray.sort((a, b) => a - b),
  };
}

function getBasicTestCases() {
  return {
    label: 'Basic tests',
    tests: [
      generateTestObject([[]], []),
      generateTestObject([[], []], []),
      generateTestObject([[], [1]], [1]),
      generateTestObject([[], [], [], [2], [], [1]], [1, 2]),
      generateTestObject([[3, 2, 1], [7, 9, 8], [6, 4, 5]], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
      generateTestObject([[1, 3, 5], [100], [2, 4, 6]], [1, 2, 3, 4, 5, 6, 100]),
      generateTestObject([[111, 999], [222], [333], [444], [888], [777], [666], [555]], [111, 222, 333, 444, 555, 666, 777, 888, 999]),
    ],
  };
}

function getCoreTestCases() {
  return {
    label: 'Core tests',
    tests: [
      generateTestObject([[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]], [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      generateTestObject([[1], [], [1], [], [], [-1, -2, -1], [0, 3], [1], [2]], [-2, -1, -1, 0, 1, 1, 1, 2, 3]),
      generateTestObject([[], [], [64], [], [504, 503], [4096], [], [303], [202], [2500], [], [100]], [64, 100, 202, 303, 503, 504, 2500, 4096]),
      generateTestObject([[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]], [0, 18, 27, 35, 46, 54, 63, 72, 81, 90]),
      generateTestObject([[1], [], [1], [1], [0], [-1], [], [0], [-1], [0], [-1]], [-1, -1, -1, 0, 0, 0, 1, 1, 1]),
      generateTestObject([[-9, -8, -7, -6, -5, -4, -3, -2, -1]], [-9, -8, -7, -6, -5, -4, -3, -2, -1]),
      generateTestObject([[9, 8, 7, 6, 5, 4, 3, 2, 1]], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ],
  };
}

function getRandomTestCases(testCount: number, valueLowerBound: number, valueUpperBound: number, countLowerBound: number, countUpperBound: number) {
  const tests: TestCase[] = [];

  const result = {
    label: 'Random tests',
    tests,
  };
  for (let times = 0; times < testCount; ++times) {
    const randomCount = generateRandomInteger(countLowerBound, countUpperBound);
    const randomTestObject = generateRandomTestObject(valueLowerBound, valueUpperBound, randomCount);
    result.tests.push(randomTestObject);
  }
  return result;
}

const randomTestCaseCount = 64;
const randomTestValueLowerBound = -10000;
const randomTestValueUpperBound = 10000;
const randomTestSequenceCountLowerBound = 0;
const randomTestSequenceCountUpperBound = 256;
const TEST_GETTERS = [getBasicTestCases, getCoreTestCases, getRandomTestCases];

for (const testGetter of TEST_GETTERS) {
  const testGroup = testGetter(
    randomTestCaseCount,
    randomTestValueLowerBound,
    randomTestValueUpperBound,
    randomTestSequenceCountLowerBound,
    randomTestSequenceCountUpperBound,
  );

  describe(testGroup.label, () => {
    for (const test of testGroup.tests) {
      it(`should pass with ${JSON.stringify(test.input)}`, () => {
        const result = flattenAndSort.apply(null, [test.input]);
        expect(result).to.deep.equal(test.output);
      });
    }
  });
}
