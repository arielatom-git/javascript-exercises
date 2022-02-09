const reverseString = function(string) {
    let stringLength = string.length
    let varLength = string.length - 1
    let backwardString = ""
    for (i = stringLength; i > 0; i--) {
        backwardString += string.charAt(varLength)
        varLength--
    }
    return backwardString
};

// Do not edit below this line
module.exports = reverseString;