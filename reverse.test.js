const reverseString = require('./reverse');

test('reverses the string', () => {
    expect(reverseString("HotMan")).toBe("naMtoH");
});