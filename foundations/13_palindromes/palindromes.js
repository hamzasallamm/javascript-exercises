const palindromes = function (string) {
    string = string.toLowerCase();
    const rev = string.split("").reverse().join("");
    return string === rev;
};

// Do not edit below this line
module.exports = palindromes;
