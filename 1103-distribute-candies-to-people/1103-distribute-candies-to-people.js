/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let count = 0;
    let output = [];
    output.length = num_people
    output.fill(0)
    while(candies) {
        for (let i = 0; i <output.length; i++) {
            if (candies > i + (count * num_people) + 1) {
                 output[i] += i + (count * num_people) + 1;
                candies -= i + (count * num_people) + 1
            } else {
                output[i] += candies
                candies -= candies
            }
        }
        count++
    }
    return output
};