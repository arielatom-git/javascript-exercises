const repeatString = function(string, number) {
    let repeat = ""
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            repeat += string
        }
    } else {
        return "ERROR"
    }
    return repeat
};
console.log(repeatString("hey", -1))
// Do not edit below this line
module.exports = repeatString;
