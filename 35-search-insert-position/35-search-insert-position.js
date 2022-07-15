/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target === nums[nums.length-1]) {
        return nums.length - 1
    }
    let output = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (target === nums[i]){
            return i;
        }
        if (target > nums[i] && target < nums[i+1]) {
            output = i+1
        }
    }
    if (target > nums[nums.length - 1]) {
        return nums.length
    }
    return output
};