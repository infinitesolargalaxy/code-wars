// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
    assert.deepEqual(solution(null), [])
    assert.deepEqual(solution([]), [])
    assert.deepEqual(solution([20, 2, 10]), [2,10,20])
    assert.deepEqual(solution([2, 20, 10]), [2,10,20])
  })
});

describe("Random tests", () => {  
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    for(let i = 0; i < 100; i++){
        let n = randint(0, 100) / 100
        let arr = n <= 0.05 ? null : n <= 0.1 ? [] : Array.from({length: randint(1, 100)}, (_, i) => randint(-100, 100))
        let expected = !arr ? [] : arr.slice().sort((a, b) => a - b)
        it(`solution(${JSON.stringify(arr)}) should equal ${JSON.stringify(expected)}`, () => {
            assert.deepEqual(solution(arr), expected);
        });
    }
}); 

function solution(nums){
    if (nums == null || nums.length == 0) {
      return [];
    }
    return nums.sort((a, b) => a - b);
}