const capitalize = require('./capitalize');

test('returns first character', () => {
    expect(capitalize("tungsten")).toBe("Tungsten");
})