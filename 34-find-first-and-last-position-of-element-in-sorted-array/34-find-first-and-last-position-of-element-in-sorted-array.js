/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.includes(target)) {
        return [-1, -1]
    }
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};