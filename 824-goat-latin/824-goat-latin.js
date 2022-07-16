/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const arr = sentence.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let end = ''.padEnd(i + 1, 'a')
        if('aeiuoAEIOU'.includes(arr[i][0])) {
            arr[i] += 'ma';
            arr[i] += end;
        } else {
            let letter = arr[i][0];
            let leftover = arr[i].slice(1);
            leftover += letter;
            leftover += 'ma';
            leftover += end;
            arr[i] = leftover
        }
    }
    return arr.join(' ')
};