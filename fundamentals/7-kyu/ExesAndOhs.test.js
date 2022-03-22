const chai = require("chai");
const assert = chai.assert;

describe("Tests", function(){
    it ("should be defined", function(){
        assert.strictEqual(XO('xo'),true);
        assert.strictEqual(XO("xxOo"),true);
        assert.strictEqual(XO("xxxm"),false);
        assert.strictEqual(XO("Oo"),false);
        assert.strictEqual(XO("ooom"),false);
        assert.strictEqual(XO('XO'),true);
        assert.strictEqual(XO('xo0'),true);
        assert.strictEqual(XO('xxxoo'),false);
        assert.strictEqual(XO("xxOo"),true);
        assert.strictEqual(XO(''),true,'Empty string contains equal amount of x and o');
        assert.strictEqual(XO('xxxxxoooxooo'),true);
        assert.strictEqual(XO("xxxm"),false);
        assert.strictEqual(XO("ooom"),false);
        assert.strictEqual(XO("Oo"),false);
        assert.strictEqual(XO('abcdefghijklmnopqrstuvwxyz'),true,'Alphabet contains equal amount of x and o');
    });
});

function XO(str) {
    // use two variables to track the counts
    let xCount = 0;
    let oCount = 0;
    const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        const char = lowerCaseStr.charAt(i);
        if (char === 'x') {
            xCount++;
        }
        if (char === 'o') {
            oCount++;
        }
    }
    return xCount === oCount;
}