const repeatString = function(s, num) {
    if (num < 0 ){
        return "ERROR"
    }
    let ans="";
    let i=0;
    while (i<num) {
        ans += s
        i++
    }
    return ans
};

// Do not edit below this line
module.exports = repeatString;
