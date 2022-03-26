// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const { assert } = require("chai")


describe("Basic tests", () => {
  
    it("squareDigits(3212) should equal 9414", () => {
        assert.strictEqual(squareDigits(3212), 9414);
    });
  
    it("squareDigits(2112) should equal 4114", () => {
        assert.strictEqual(squareDigits(2112), 4114);
    });
  
    it("squareDigits(0) should equal 0", () => {
        assert.strictEqual(squareDigits(0), 0);
    });
});
  
  
describe("Random tests", () => {  
    function randint(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    for(let i = 1; i <= 100; i++){
        let num = randint(1, 10_000_000)
        let expected = +[...(''+num)].map(x => Math.pow(+x, 2)).join``
        it(`squareDigits(${num}) should equal ${expected}`, () => {
            assert.strictEqual(squareDigits(num), expected);
        });
    }
})

// function squareDigits(num) {
//     const square = ((num) => {
//         return num * num;
//     });
//     const strNum = num.toString();
//     let concatenatedNum = '';
//     for (let i = 0; i < strNum.length; i++) {
//         concatenatedNum = `${concatenatedNum}${square(parseInt(strNum.charAt(i), 10))}`;
//     }
//     return parseInt(concatenatedNum, 10);
// }

function squareDigits(num){
    var strNum = num.toString();
    var results = [];
    for (var i = 0; i < strNum.length; i++){
        results[i] = strNum[i] * strNum[i];
    }
    return Number(results.join(''));
};