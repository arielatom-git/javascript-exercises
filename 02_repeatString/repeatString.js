const repeatString = function(string, number) {
    let repeat = ""
    for (let i = 0; i < number; i++) {
        if (number >= 0) {
            repeat += string
        } else {
            return "hello"
        }
    }
    // return repeat
};

// Do not edit below this line
module.exports = repeatString;
