// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
const questions = [{
  question: "What's the currency of the USA?",
  choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
  corAnswer: 0,
}, {
  question: 'Where was the American Declaration of Independence signed?',
  choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
  corAnswer: 0,
}];

questions.forEach((question, idx) => {
  question.usersAnswer = null;
});

const { assert } = require('chai');

describe('Tests', () => {
  it('test', () => {
    assert.equal(questions[0].usersAnswer === null);
    questions.forEach((i) => {
      assert.equal(i.usersAnswer === null, 'Should have usersAnswer property set to null');
      assert.equal(Object.keys(i).length === 5, 'The number of properties is not what is expected');
      assert.equal(i.hasOwnProperty('usersAnswer'), 'Should have own property "usersAnswer"');
    });
    assert.equal(questions.length === 11, 'The length of the array should not be modified');
  });
});
