/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false
    while (n > 1) {
        if (Number.isInteger(n / 2)) {
            n = n / 2
        } else {
            return false
        }
    }
    return true
};