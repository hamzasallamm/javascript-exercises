const reverseString = function(word) {
    let length = word.length;
    let reversedWord = '';
    for (let i = length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
