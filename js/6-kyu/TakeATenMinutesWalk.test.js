// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
  let x = 0;
  let y = 0;

  if (walk.length != 10) { return false; }

  walk.forEach((direction) => {
    if (direction === 'n') { y++; }
    if (direction === 's') { y--; }
    if (direction === 'e') { x++; }
    if (direction === 'w') { x--; }
  });
  return x === 0 && y === 0;
}

const chai = require('chai');

const { assert } = chai;

const fail = [
  ['n'],
  ['n', 's'],
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
  ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w'],
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'],
  ['e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
  ['n', 'e', 'n', 'e', 'n', 'e', 'n', 'e', 'n', 'e'],
  ['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
  ['e', 's', 'e', 's', 'e', 's', 'e', 's', 'e', 's'],
  ['w', 's', 'w', 's', 'w', 's', 'w', 's', 'w', 's'],
];

const pass = [
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
  ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
  ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'],
  ['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'n', 's'],
];

describe('Walk Validator', () => {
  it('should return false if walk is too short', () => {
    assert.isOk(!isValidWalk(fail[0]));
    assert.isOk(!isValidWalk(fail[1]));
  });
  it('should return false if walk is too long', () => {
    assert.isOk(!isValidWalk(fail[2]));
    assert.isOk(!isValidWalk(fail[3]));
  });
  it('should return false if walk does not bring you back to start', () => {
    assert.isOk(!isValidWalk(fail[4]));
    assert.isOk(!isValidWalk(fail[5]));
    assert.isOk(!isValidWalk(fail[6]));
    assert.isOk(!isValidWalk(fail[7]));
    assert.isOk(!isValidWalk(fail[8]));
    assert.isOk(!isValidWalk(fail[9]));
  });
  it('should return true for a valid walk', () => {
    assert.isOk(isValidWalk(pass[0]));
    assert.isOk(isValidWalk(pass[1]));
    assert.isOk(isValidWalk(pass[2]));
    assert.isOk(isValidWalk(pass[3]));
  });
});
