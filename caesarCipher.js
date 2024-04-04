function caesarCipher(string, shift) {

    let alph = "abcdefghijklmnopqrstuvwxyz";
    let alphArr = alph.split("");
    let cipherArr = [];
    let cipherString = "";

    for (let i=0; i<string.length; i++) {

        let digit = string.charAt(i);


        if (!alphArr.includes(digit) && !alphArr.includes(digit.toLowerCase())) {
            cipherArr.push(digit);
        }
        else if (digit == digit.toUpperCase()) {
            let index = alphArr.indexOf(digit.toLowerCase());
            let shiftIndex = index + shift;
            let wrappedIndex = getWrapIndex(shiftIndex);
            let cipherDigit = alphArr[wrappedIndex];
            cipherArr.push(cipherDigit.toUpperCase());
        }
        else {
            let index = alphArr.indexOf(digit);
            let shiftIndex = index + shift;
            let wrappedIndex = getWrapIndex(shiftIndex);
            let cipherDigit = alphArr[wrappedIndex];
            cipherArr.push(cipherDigit)
            
        }

    }

    cipherString = cipherArr.join("");
    return cipherString;

}

function getWrapIndex(index) {
    if (index > 25) {
        return index%25 - 1
    }
    else {
        return index
    }
}

module.exports = caesarCipher;