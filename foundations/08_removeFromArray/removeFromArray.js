const removeFromArray = function(arr, num) {
    const length = arr.length;
    let i=0;
    let newArr = [];
    while(i<length){
        if(arr[i]!==num){
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
