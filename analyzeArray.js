function analyzeArray(arr) {
    return {
        average: getAverage(arr),
    }
    
}

function getAverage(arr) {
    let total = arr.reduce(function (prev, curr) {
        return prev + curr;
    })
    return total/arr.length;
}

module.exports = analyzeArray;