/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const unique = []
    for (let i = 0; i <candyType.length; i++) {
        if (!unique.includes(candyType[i])) {
            unique.push(candyType[i])
        }
    }
    if (candyType.length / 2 < unique.length) {
        return candyType.length / 2
    } else {
        return unique.length
    }
};