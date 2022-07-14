/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split('');
    while (arr.length > 1) {
        const lastItem = arr.pop();
        if (lastItem === arr[0]) {
            arr.shift()
        } else {
            return false
        }
    }
    return true
};