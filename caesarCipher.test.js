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
test('Keeps punctuation and all non-letter digits in place', () => {
    expect(caesarCipher("How's it going?", 1)).toBe("Ipx't ju hpjoh?");
});