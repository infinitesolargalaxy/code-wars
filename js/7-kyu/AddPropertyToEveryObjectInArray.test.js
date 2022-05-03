// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
import { assert } from 'chai';

const questions = [{
  question: "What's the currency of the USA?",
  choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
  corAnswer: 0,
}, {
  question: 'Where was the American Declaration of Independence signed?',
  choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
  corAnswer: 0,
}];

/**
 * @param {any[]} q
 */
function addProperty(q) {
  q.forEach((question) => {
    // eslint-disable-next-line no-param-reassign
    question.usersAnswer = null;
  });
}

describe('Tests', () => {
  it('test', () => {
    addProperty(questions);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    assert.equal(questions[0].usersAnswer, null);
    questions.forEach((i) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      assert.equal(i.usersAnswer, null, 'Should have usersAnswer property set to null');
      assert.equal(Object.keys(i).length, 4, 'The number of properties is not what is expected');
      assert.equal(i.hasOwnProperty('usersAnswer'), true, 'Should have own property "usersAnswer"');
    });
    assert.equal(questions.length, 2, 'The length of the array should not be modified');
  });
});
