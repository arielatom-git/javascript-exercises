const sumAll = function(num1, num2) {
    if (num2 < num1) {
        temp = num2
        num2 = num1
        num1 = temp
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }
    let numAdd = num1
    let sum = num1
    for (i = num1; i < num2; i++) {
        numAdd++
        sum += numAdd
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
