// https://www.codewars.com/kata/5a3dd29055519e23ec000074/typescript

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

const correctScore = 4;
const incorrectScore = -1;
const blankScore = 0;
export function checkExam(array1: string[], array2: string[]): number {
  let score = 0;
  array1.forEach((ans, idx) => {
    const studentAns = array2[idx];
    if (studentAns === ans) score += correctScore;
    if (studentAns !== '' && studentAns !== ans) score += incorrectScore;
  });
  return Math.max(score, 0);
}

describe("Basic tests", () => {
  it("Should pass basic tests", () => {
    assert.equal(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    assert.equal(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    assert.equal(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    assert.equal(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);
  });
});