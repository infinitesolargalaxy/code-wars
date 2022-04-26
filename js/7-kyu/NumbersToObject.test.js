// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript
// function numObj(s){
//   return s.map(num => {
//     const key = num.toString()
//     const obj = {};
//     obj[key] = String.fromCharCode(num);
//     return obj;
//   })
// }

function numObj(s) {
  return s.map((n) => ({ [n]: String.fromCharCode(n) }));
}

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Numbers  to Objects', () => {
  it('Testing for fixed tests', () => {
    assert.deepEqual(numObj([118, 117, 120]), [{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }]);
    assert.deepEqual(numObj([101, 121, 110, 113, 113, 103]), [{ 101: 'e' }, { 121: 'y' }, { 110: 'n' }, { 113: 'q' }, { 113: 'q' }, { 103: 'g' }]);
    assert.deepEqual(numObj([118, 103, 110, 109, 104, 106]), [{ 118: 'v' }, { 103: 'g' }, { 110: 'n' }, { 109: 'm' }, { 104: 'h' }, { 106: 'j' }]);
    assert.deepEqual(numObj([107, 99, 110, 107, 118, 106, 112, 102]), [{ 107: 'k' }, { 99: 'c' }, { 110: 'n' }, { 107: 'k' }, { 118: 'v' }, { 106: 'j' }, { 112: 'p' }, { 102: 'f' }]);
    assert.deepEqual(numObj([100, 100, 116, 105, 117, 121]), [{ 100: 'd' }, { 100: 'd' }, { 116: 't' }, { 105: 'i' }, { 117: 'u' }, { 121: 'y' }]);
  });

  it('Random tests', () => {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
    function mynumObj(s) {
      const sol = [];

      for (let i = 0; i < s.length; i++) {
        const myObj = new Object();
        const a = s[i];
        const b = String.fromCharCode(s[i]);
        myObj[a] = b;
        sol.push(myObj);
      }
      return sol;
    }

    const nums = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

    for (let i = 0; i < 40; i++) {
      const s = []; const
        len = randint(1, 20);
      for (let k = 0; k < len; k++) s.push(nums[randint(0, nums.length - 1)]);
      assert.deepEqual(numObj(s.slice()), mynumObj(s.slice()), `Testing for ${JSON.stringify(s)}`);
    }
  });
});
