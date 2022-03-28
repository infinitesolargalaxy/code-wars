// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

```
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```

However, the arrays can have varying lengths, not just limited to 4.
*/

const chai = require("chai");
const assert = chai.assert;

const binaryArrayToNumber = arr => {
    // iterate from right to left
    // sum by increasing powers of 2
    let sumAmount = 1;
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] === 1 ? sum += sumAmount : false;
        sumAmount *= 2;
    }
    return sum;
};

describe("One's and Zero's", () => {

    it("Example tests", () => {
        assert.strictEqual(binaryArrayToNumber([0,0,0,1]), 1);
        assert.strictEqual(binaryArrayToNumber([0,0,1,0]), 2);
        assert.strictEqual(binaryArrayToNumber([0,1,0,1]), 5);
        assert.strictEqual(binaryArrayToNumber([1,0,0,1]), 9);
        assert.strictEqual(binaryArrayToNumber([0,0,1,0]), 2);
        assert.strictEqual(binaryArrayToNumber([0,1,1,0]), 6);
        assert.strictEqual(binaryArrayToNumber([1,1,1,1]), 15);
        assert.strictEqual(binaryArrayToNumber([1,0,1,1]), 11);

    });

    it("Random tests", () => {
        function solution(arr) {
            let sum = 0;
            let sumAmount = 1;
            for (let i = arr.length - 1; i >= 0; i--) {
                arr[i] === 1 ? sum += sumAmount : false;
                sumAmount *= 2;
            }
            return sum;
        }
        for (let i = 0; i < 100; i++) {
            let arr = [];
            let length = Math.floor(Math.random() * 10);
            for (let j = 0; j < length; j++) {
                arr.push(Math.floor(Math.random() * 2));
            }
            assert.strictEqual(binaryArrayToNumber(arr), solution(arr));
        }
    });
});