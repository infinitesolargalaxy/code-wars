// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss) {
  let moodScore = 0;
  Object.keys(meet).forEach((coworker) => {
    if (coworker === boss) {
      moodScore += meet[coworker];
    }
    moodScore += meet[coworker];
  });
  return (moodScore / Object.keys(meet).length <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
}

const { assert } = require('chai');

describe('Example tests', () => {
  assert.equal(outed({
    tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0,
  }, 'laura'), 'Get Out Now!');
  assert.equal(outed({
    tim: 1, jim: 3, randy: 9, sandy: 6, andy: 7, katie: 6, laura: 9, saajid: 9, alex: 9, john: 9, mr: 8,
  }, 'katie'), 'Nice Work Champ!');
  assert.equal(outed({
    tim: 2, jim: 4, randy: 0, sandy: 5, andy: 8, katie: 6, laura: 2, saajid: 2, alex: 3, john: 2, mr: 8,
  }, 'john'), 'Get Out Now!');
});

describe('Basic tests', () => {
  assert.equal(outed({
    tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0,
  }, 'laura'), 'Get Out Now!');
  assert.equal(outed({
    tim: 1, jim: 3, randy: 9, sandy: 6, andy: 7, katie: 6, laura: 9, saajid: 9, alex: 9, john: 9, mr: 8,
  }, 'katie'), 'Nice Work Champ!');
  assert.equal(outed({
    tim: 2, jim: 4, randy: 0, sandy: 5, andy: 8, katie: 6, laura: 2, saajid: 2, alex: 3, john: 2, mr: 8,
  }, 'john'), 'Get Out Now!');
});

describe('Random tests', () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
  function myouted(meet, boss) {
    let total = 0;
    for (let i = 0; i < Object.keys(meet).length; i++) total += meet[Object.keys(meet)[i]];
    total += meet[boss];
    return total / Object.keys(meet).length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
  }
  const names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 100; i++) {
    const team = ['tim', 'jim', 'randy', 'sandy', 'andy', 'katie', 'laura', 'saajid', 'alex', 'john', 'mr'];
    const boss = team[randint(0, team.length - 1)];
    const meet = {
      tim: 0, jim: 0, randy: 0, sandy: 0, andy: 0, katie: 0, laura: 0, saajid: 0, alex: 0, john: 0, mr: 0,
    };
    meet.tim = (names[randint(0, names.length - 1)]);
    meet.jim = (names[randint(0, names.length - 1)]);
    meet.randy = (names[randint(0, names.length - 1)]);
    meet.sandy = (names[randint(0, names.length - 1)]);
    meet.andy = (names[randint(0, names.length - 1)]);
    meet.katie = (names[randint(0, names.length - 1)]);
    meet.laura = (names[randint(0, names.length - 1)]);
    meet.saajid = (names[randint(0, names.length - 1)]);
    meet.alex = (names[randint(0, names.length - 1)]);
    meet.john = (names[randint(0, names.length - 1)]);
    meet.mr = (names[randint(0, names.length - 1)]);

    it('Testing... Testing...', () => {
      assert.equal(myouted(meet, boss), outed(meet, boss), 'It should work for random inputs too');
    });
  }
});
