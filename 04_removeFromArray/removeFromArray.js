const removeFromArray = function(arr, ...rm) {
 for (let i = 0; i < arr.length;){
    if (rm.includes(arr[i])){
        arr.splice(i,1);
    }
    else{
        i++;
    }
 }
 return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
