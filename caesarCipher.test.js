const caesarCipher = require('./caesarCipher');

// test wrapping
test('Wraps from z to a', () => {
    expect(caesarCipher("XYZxyz",3)).toBe("ABCabc");
});
// test keeping same case
test('Maintains case when shifting', () => {
    expect(caesarCipher("AaBbCc", 1)).toBe("BbCcDd");
});

// test punctuation
