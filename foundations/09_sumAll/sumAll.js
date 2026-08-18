const sumAll = function(small, big) {
    let sum = 0;
    let i = big;
    while(i>= small){
        sum += i;
        i--;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
