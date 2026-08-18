const repeatString = function(word, num) {
    let string = "";
    while(num > 0) {
        string = string.concat(word);
        num--;
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
