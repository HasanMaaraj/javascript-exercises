const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2))){
        return "ERROR";
    } 
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    } 
    if (num1 < num2) {
        var begin = num1;
        var end = num2;
    }
    else {
        var begin = num2;
        var end = num1;
    }
    let result =0;
    for (let i = begin; i <= end; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
