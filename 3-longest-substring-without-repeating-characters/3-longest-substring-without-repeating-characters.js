/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }
    let highest = 1;
    for (let i = 0; i < s.length ; i++) {
        let current = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (!current.includes(s[j])) {
                current += s[j];
            } else if(current.length > highest){
                highest = current.length;
                break;
            } else {
                break;
            }
        }
        if (current.length > highest) {
            highest = current.length
        }
    }
    return highest
};