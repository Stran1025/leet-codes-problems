/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1]++
    let last = digits.length - 1;
    while (digits[last] > 9) {
        digits[last] = 0;
        if (last === 0) {
            digits.unshift(1);
            return digits
        }
        last--
        digits[last]++
    }
    return digits
    // for (let i = digits.length - 1; i >=0; i--) {
    //     if (digits[i] === 9) {
    //         digits[i] = 0
    //     }
    //     if (digits[i] === 9 && i === 0) {
    //         let output = [];
    //         output.length = digits.length
    //         ouput.fill(0)
    //         output.unshift(1)
    //         return output
    //     } else {
    //     digits[i]++;
    //     return digits
    //     }
    // }
};