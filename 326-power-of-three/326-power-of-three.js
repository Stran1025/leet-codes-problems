/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 0) return false
    let number = Math.abs(n)
    if (number===0) return false
    while (number > 1) {
        if(Number.isInteger(number / 3)) {
            number = number / 3
        } else {
            return false
        }
    }
    return true
};