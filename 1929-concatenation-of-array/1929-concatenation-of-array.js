/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        output.push(nums[i])
    }
    return output.concat(nums)
};