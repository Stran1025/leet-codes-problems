/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let output = ''
    for (let i = 0; i < indices.length; i++) {
        output += s[indices.indexOf(i)]
    }
    return output
};