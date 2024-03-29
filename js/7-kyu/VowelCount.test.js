// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const chai = require('chai');

const { assert } = chai;

describe('Case 1', () => {
  it('should be defined', () => {
    assert.strictEqual(getCount('abracadabra'), 5);
  });
});

describe('Vowels Count Tests', () => {
  it("should return 5 for 'abracadabra'", () => {
    assert.strictEqual(getCount('abracadabra'), 5);
  });

  it("should return 4 for 'pear tree'", () => {
    assert.strictEqual(getCount('pear tree'), 4);
  });

  it("should return 13 for 'o a kak ushakov lil vo kashu kakao'", () => {
    assert.strictEqual(getCount('o a kak ushakov lil vo kashu kakao'), 13);
  });

  it("should return 0 for 'my pyx'", () => {
    assert.strictEqual(getCount('my pyx'), 0);
  });

  it('should return 168 for a long input', () => {
    assert.strictEqual(getCount('tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty'), 168);
  });
});

function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (vowels.indexOf(char) >= 0) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
