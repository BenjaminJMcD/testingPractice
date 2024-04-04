function analyzeArray(arr) {
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
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

function getMax(arr) {
    let max = Math.max.apply(null, arr);
    return max;
}

module.exports = analyzeArray;