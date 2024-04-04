const Calculator = require('./calculator');

let calc = new Calculator;

test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1,2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calc.subtract(5,3)).toBe(2);
});

test('divides 12 / 4 to equal 3', () => {
    expect(calc.divide(12,4)).toBe(3);
});

test('multiplies 2 * 5 to equal 10', () => {
    expect(calc.multiply(2,5)).toBe(10);
});


// NEED TO COMMIT AND PUSH CALCULATOR AND START CAESAR CIPHER BRANCH