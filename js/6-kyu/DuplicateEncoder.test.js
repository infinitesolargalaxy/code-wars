// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  const occurences = {};
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i).toLowerCase();
    if (char in occurences) {
      occurences[char] += 1;
      continue;
    }
    occurences[char] = 1;
  }
  // Encode
  let encoded = '';
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i).toLowerCase();
    if (occurences[char] > 1) {
      encoded += ')';
      continue;
    }
    encoded += '(';
  }
  return encoded;
}

const chai = require('chai');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Duplicate Encoder', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(duplicateEncode('din'), '(((');
    assert.strictEqual(duplicateEncode('recede'), '()()()');
    assert.strictEqual(duplicateEncode('Success'), ')())())', 'should ignore case');
    assert.strictEqual(duplicateEncode('CodeWarrior'), '()(((())())');
    assert.strictEqual(duplicateEncode('Supralapsarian'), ')()))()))))()(', 'should ignore case');
    assert.strictEqual(duplicateEncode('iiiiii'), '))))))', 'duplicate-only-string');
  });

  it("Tests with '(' and ')'", () => {
    assert.strictEqual(duplicateEncode('(( @'), '))((');
    assert.strictEqual(duplicateEncode(' ( ( )'), ')))))(');
  });

  it('And now... some random tests !', () => {
    const rndEncode = function () {
      const chars = 'abcdeFGHIJklmnOPQRSTuvwxyz() @!'.split('').sort(() => ((Math.random() > 0.5) ? 1 : -1)).join('');
      let enc = '';
      let src = '';
      let count = 0;
      const len = 10 + ~~(Math.random() * 10);
      const dup = chars[chars.length - 1];
      for (let c = 0; c < len; c++) {
        if (Math.random() > 0.5) {
          enc += '(';
          src += chars[c];
        } else {
          enc += ')';
          src += dup;
          count++;
        }
      }
      // Chrono79's intent to fix the random quirk
      // It happened because the duplicate char was inserted only once so it wasn't a duplicate at all.
      // So I add it once more to fix it
      if (count === 1) {
        enc += ')';
        src += dup;
      }
      return { src, res: enc };
    };

    let t = 5;
    while (t--) {
      const tst = rndEncode();
      assert.strictEqual(duplicateEncode(tst.src), tst.res, `should encode '${tst.src}'`);
    }
  });
});
