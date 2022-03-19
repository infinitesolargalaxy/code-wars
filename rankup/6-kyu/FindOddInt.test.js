// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
const assert = require("chai").assert;

function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    assert.strictEqual(findOdd(a), n);
}
describe('Example tests', function() {
    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

// Create map to track number of occurrences of each number
// Iterate over map's keys and check if any key had an odd number of occurrences
// Return the key with odd number of occurrences
// Create map to track number of occurrences of each number
// Iterate over map's keys and check if any key had an odd number of occurrences
// Return the key with odd number of occurrences
function findOdd(A) {
    //happy coding!
    const map = {};
    A.forEach((num) => {
        if (!Object.prototype.hasOwnProperty.call(map, num)) {
            map[num] = 0;
        }
        map[num]++;
    });
    let answer = 0;
    Object.entries(map).forEach(([num, count]) => {
        if (parseInt(count, 10) % 2 === 1) {
            answer = parseInt(num);
        }
    });
    return answer;
}

