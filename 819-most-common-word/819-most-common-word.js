/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const regex = /([,.!?:;!'])/g
    const input = paragraph.toLowerCase().replaceAll(regex, ' ')
    const arr = input.split(' ');
    const context = {};
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] === '') continue
        let item = arr[i].trimEnd()
        if (context.hasOwnProperty(item)) {
            context[item]++
        } else {
            context[item] = 0;
        }
    }
    for (let i = 0; i <banned.length; i++) {
        if (context.hasOwnProperty(banned[i])) {
            context[banned[i]] = -1
        }
    }
    let highest = -Infinity;
    let output = ''
    for (let key in context) {
        if (context[key] > highest) {
            highest = context[key]
            output = key
        }
    }
    return output;
};