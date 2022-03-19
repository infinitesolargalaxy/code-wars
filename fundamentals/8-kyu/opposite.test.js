const assert = require("chai").assert;

describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof opposite, "function", "opposite should be a function");
  });
  it("opposite(1), -1,", function() {
    assert.strictEqual(opposite(1), -1);
  });
  it("opposite(0), 0,", function() {
    assert.strictEqual(opposite(0), 0);
  });
  it("opposite(4.25), -4.25,", function() {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it("opposite(3.3333333), -3.3333333,", function() {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it("opposite(-12525220.3325), 12525220.3325,", function() {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it("opposite(-5), 5,", function() {
    assert.strictEqual(opposite(-5), 5);
  });
});

describe("Random tests", function() {
    const generateRandom = (min, max) => Math.random() * (max - min + 1) + min;
    const opposite_sol = number => -number;
    for (let i = 0; i < 40; i++) {
        const randomNumber = generateRandom(0,100);
        const expected = opposite_sol(randomNumber);
        it(`Testing for opposite(${randomNumber})`, function() {
            assert.strictEqual(opposite(randomNumber), expected);
        });
    }
});

function opposite(number) {
    return number * -1;
}