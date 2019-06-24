const luckBalance = (k, contests) => {
    let luck = 0;
    contests.sort(sortFunc);
    contests.map(curr => {
        if (curr[1] === 0 ) {
            luck += curr[0];
        } else if (curr[1] === 1 && k > 0) { // Important and we can still lose important contests
            luck+= curr[0];
            k--;
        } else { // Important but we can no longer lose
            luck-= curr[0];
        }
    })
    return luck;
}

const sortFunc =  (a, b) => {
    if (a[0] === b[0]) {
        return 0;
    } else {
        return a[0] > b[0] ? -1 : 1;
    }
}

console.log(luckBalance(3, [[5,1],[2,1],[1,1],[8,1],[10,0], [5,0]]));