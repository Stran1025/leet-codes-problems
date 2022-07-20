/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let highest = 0;
    for (let i = 0; i < accounts.length; i++) {
        let total = 0
        for (let j = 0; j <accounts[i].length; j++) {
            total += accounts[i][j]
        }
        if (total > highest) {
            highest = total
        }
    }
    return highest
};