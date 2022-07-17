/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let highest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    return nums.length
};