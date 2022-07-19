/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <=0) return false
    while (n > 1) {
        if (Number.isInteger(n / 4)) {
            n = n / 4
        } else {
            return false
        }
    }
    return true
};