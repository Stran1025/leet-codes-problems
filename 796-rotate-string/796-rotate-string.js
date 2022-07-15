/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let i = 0;
    while (i < s.length) {
        i++
        let movingLetter = s.slice(0, 1)
        let remain = s.slice(1)
        s = remain + movingLetter;
        if (s === goal) {
            return true
        }
    }
    return false
};