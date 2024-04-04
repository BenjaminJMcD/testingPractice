function analyzeArray(arr) {
    return {
        average: getAverage(arr),
        min: getMin(arr),
    }
    
}

function getAverage(arr) {
    let total = arr.reduce(function (prev, curr) {
        return prev + curr;
    })
    return total/arr.length;
}

function getMin(arr) {
    let min = Math.min.apply(null, arr);
    return min;
}

module.exports = analyzeArray;