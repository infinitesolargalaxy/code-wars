// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

const chai = require('chai');
const assert = chai.assert;

describe("removeSmallest", function() {
    it("works for the examples", function() {
      assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
      assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
      assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
      assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
    });
    
    it("returns [] if the list has only one element", function() {
      for (let i = 0; i < 10; ++i) {
        let x = ~~(Math.random() * 400);
        assert.deepEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
      }
    });
    
    function randomArray(length) {
      return Array.from({length: length}, () => ~~(Math.random() * 400));
    }
    
    it("returns a list that misses only one element", function() {
      for(let i = 0; i < 10; ++i) {
        let arr = randomArray(~~(Math.random() * 10) + 1);
        let l = arr.length;
        assert.deepEqual(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
      }
    });
  });

// function removeSmallest(numbers) {
//     if (numbers.length === 0) {
//         return [];
//     }
//     const smallest = Math.min(...numbers);
//     const smallestIndex = numbers.indexOf(smallest);
//     const copyNumbers = [...numbers];
//     copyNumbers.splice(smallestIndex, 1);
//     // console.log(copyNumbers, smallest, smallestIndex);
//     return copyNumbers;
// }

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    const smallest = Math.min(...numbers);
    const smallestIndex = numbers.indexOf(smallest);
    return numbers.filter((num, idx) => idx != smallestIndex);
}