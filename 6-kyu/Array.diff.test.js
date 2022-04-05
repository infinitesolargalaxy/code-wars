// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const { expect } = require('chai');

try {
  array_diff([1], [1]);
} catch (error) {
  array_diff = arrayDiff;
}

describe('Basic tests', () => {
  it('Should pass Basic tests', () => {
    expect(array_diff([1, 2], [1])).to.deep.equal([2], 'a was [1,2], b was [1]');
    // What the hell is this? Test.assertDeepEquals
    // Deprecated Code wars proprietary framework
    // https://docs.codewars.com/languages/javascript/codewars-test/

    // Test.assertDeepEquals(array_diff([1,2], [1]), [2], "a was [1,2], b was [1]");
    // Test.assertDeepEquals(array_diff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    // Test.assertDeepEquals(array_diff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    // Test.assertDeepEquals(array_diff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    // Test.assertDeepEquals(array_diff([], [1,2]), [], "a was [], b was [1,2]");
    // Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});

describe('Random tests', () => {
  const array_diff_sol = (a, b) => a.filter((e) => !b.includes(e));
  const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  // Fisher Yates shuffle
  // CC BY-SA 4.0: https://stackoverflow.com/a/64925682
  const randomize = (points) => {
    for (i = points.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = points[i];
      points[i] = points[j];
      points[j] = k;
    }
  };
  let a; let b; let expected; let aLength; let
    bLength;
  for (let i = 0; i < 40; i++) {
    a = [];
    b = [];
    aLength = generateRandomInt(0, 20);
    bLength = generateRandomInt(0, aLength);
    for (let j = 0; j < aLength; j++) {
      a.push(generateRandomInt(0, 40) - 20);
      b = [...a];
      randomize(b);
      b = b.slice(0, generateRandomInt(0, bLength));
      expected = array_diff_sol(a, b);
      it(`Testing for arrayDiff([${a}],[${b}])`, () => {
        expect(array_diff(a, b)).to.deep.equal(expected, 'Should work for random arrays too');
      });
    }
  }
});

function arrayDiff1(a, b) {
  // Sort a: O(nlogn)
  a.sort();
  // Iterate over b
  const j = 0;
  for (let i = 0; i < b.length; i++) {
    while (b[i] === a[j]) {
      a.remove();
    }
  }
  // While b[i] === a[j], pop from a
  // Return
}

// O(n^2)...
function arrayDiff(a, b) {
  // Iterate over b, build an object for O(1) check
  bMap = {};
  b.forEach((val) => {
    bMap[val] = true;
  });
  function existsInB(val) {
    return !(val in bMap);
  }
  // Iterate over a, check if in hashmap
  return a.filter(existsInB);
}
