// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
// function smallEnough(a, limit) {
//   let flag = true;
//   a.forEach((num) => {
//     console.log(num, limit)
//     if (num > limit) {
//       flag = false
//     }
//   });
//   return flag;
// }

function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
  });
});

describe('Random tests', () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
  function mysmallEnough(a, limit) {
    function small(element, index, array) {
      return element <= limit;
    }
    return a.every(small);
  }

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('Testing for 40 random tests', () => {
    for (let i = 0; i < 40; i++) {
      const limit = (nums[randint(0, nums.length - 1)]);
      const a = []; const
        len = randint(1, 20);
      for (let k = 0; k < len; k++) a.push(nums[randint(0, nums.length - 1)]);
      assert.strictEqual(smallEnough(a.slice(), limit), mysmallEnough(a.slice(), limit), `Testing for smallEnough(${JSON.stringify(a)}, ${limit})`);
    }
  });
});
