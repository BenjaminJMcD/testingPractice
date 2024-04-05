const analyzeArray = require('./analyzeArray');

// AVERAGE
test('analyzeArray().average of [1,8,3,4,2,6] returns 4', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
});

// MIN
test('analyzeArray().min of [1,8,3,4,2,6] returns 1', () =>{
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

// MAX
test('analyzeArray().max of [1,8,3,4,2,6] returns 8', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

// LENGTH
test('analyzeArray().length of [1,8,3,4,2,6] returns 6', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});