function reverseString(string) {

    let revArr = [];
    let revString = "";

    for (let i=0; i<string.length; i++) {
        revArr.unshift(string.charAt(i));
        revString = revArr.join('');
    }

    return revString;
}
module.exports = reverseString;