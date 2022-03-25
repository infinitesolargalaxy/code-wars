const chai = require('chai');
const assert = chai.assert;

describe("validatePIN", function() {
    it("should return False for pins with length other than 4 or 6", function() {
        assert.strictEqual(validatePIN("1"),false, "Wrong output for '1'");
        assert.strictEqual(validatePIN("12"),false, "Wrong output for '12'");
        assert.strictEqual(validatePIN("123"),false, "Wrong output for '123'");
        assert.strictEqual(validatePIN("12345"),false, "Wrong output for '12345'");
        assert.strictEqual(validatePIN("1234567"),false, "Wrong output for '1234567'");
        assert.strictEqual(validatePIN("-1234"),false, "Wrong output for '-1234'");
        assert.strictEqual(validatePIN("-12345"),false, "Wrong output for '-12345'");
        assert.strictEqual(validatePIN("1.234"),false, "Wrong output for '1.234'");
        assert.strictEqual(validatePIN("00000000"),false, "Wrong output for '00000000'");
    });
    
    it("should return False for pins which contain characters other than digits", function() {
        assert.strictEqual(validatePIN("a234"),false, "Wrong output for 'a234'");
        assert.strictEqual(validatePIN(".234"),false, "Wrong output for '.234'");
    });
    
    it("should return True for valid pins", function() {
        assert.strictEqual(validatePIN("1234"),true, "Wrong output for '1234'");
        assert.strictEqual(validatePIN("0000"),true, "Wrong output for '0000'");
        assert.strictEqual(validatePIN("1111"),true, "Wrong output for '1111'");
        assert.strictEqual(validatePIN("123456"),true, "Wrong output for '123456'");
        assert.strictEqual(validatePIN("098765"),true, "Wrong output for '098765'");
        assert.strictEqual(validatePIN("000000"),true, "Wrong output for '000000'");
        assert.strictEqual(validatePIN("123456"),true, "Wrong output for '123456'");
        assert.strictEqual(validatePIN("090909"),true, "Wrong output for '090909'");
    });
    
    it("should handle all edge cases", function() {
        const tests = [
            '',
            '123',
            '12345',
            '1234567',
            '1234567890',
            '1234x',
            '123456x',
            '12.0',
            '1234.0',
            '123456.0',
            '123\n',
            '1234\n',
            '09876\n',
            '098765\n',
            '-111',
            '111-',
            '-44444',
            '44444-',
            '+111',
            '+88888',
            '+1111',
            '-2018',
            '+234567',
            '-234567',
            '123/',
            '456:',
            '9¾9¾',
        ];
        for (let s of tests)
            assert.strictEqual(validatePIN(s), false, `Wrong output for '${s}'`);
        });
    
    it("should work with random input", function() {
        const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
        const randValidPin = () => {
            const length = Math.random() < 0.5 ? 4 : 6;
            const digits = "0123456789";
            return Array.from({length: length}, () => digits[randint(0, digits.length - 1)]);
        }
        const solution = (pin) => /^\d{4}$|^\d{6}$/.test(pin);
    
        for(let i = 0; i < 50; ++i) {
            let pin = randValidPin();
            if (Math.random() < 0.5) pin[randint(0, pin.length-1)] = Math.random() < 0.5 ? String.fromCharCode(randint(32, 127)) : ".";
            pin = pin.join("");
            
            assert.strictEqual(validatePIN(pin), solution(pin), `Wrong output for '${pin}'`);
        }
    });
});

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}