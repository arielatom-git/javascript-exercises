const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        if (arr.indexOf(arg) >= 0) {
            let arrIndex = arr.indexOf(arg)
            arr.splice(arrIndex, 1)
        } else {
            void(0)
        }
    }
    return arr
};
// Do not edit below this line
module.exports = removeFromArray;
