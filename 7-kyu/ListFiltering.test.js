// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

const { assert } = require('chai');

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(filter_list([1, 2, 'a', 'b']), [1, 2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123], 'For input [1,2,"aasf","1","123",123]');
  });
});

// function filter_list(list) {
//     // Return a new array with the strings filtered out
//     return list.filter((element) => {
//         return typeof element === 'number';
//     });
// }

function filter_list(list) {
  return list.filter((element) => typeof element === 'number');
}
