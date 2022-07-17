/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const output = [];
    nums.sort();
    for (let i = 0; i <nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            i++
        } else {
            output.push(nums[i])
        }
    }
    return output;
};