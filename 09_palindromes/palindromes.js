const palindromes = function (s) {
    let processedStrng = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let reversed = processedStrng.split('').reverse().join('');
    return processedStrng === reversed;
};

// Do not edit below this line
module.exports = palindromes;
