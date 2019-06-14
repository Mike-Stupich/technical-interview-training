const getMinimumDifference = (a, b) => {
    diffArr = new Array()
    for(let i = 0; i < a.length, i < b.length; ++i) {
        diffArr.push(getCurrDiff(a[i], b[i]))
    }
    console.log(diffArr);
    return diffArr
}

const getCurrDiff = (a, b) => {
    if (a.length !== b.length) {
        return -1;
    }
    let dict = new Array(26).fill(0);
    for (let i  = 0 ; i < a.length; ++i) {
        dict[a[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i  = 0 ; i < b.length; ++i) {
        dict[b[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    const numDiffs = dict.reduce((sum, curr) => {
        return sum + Math.abs(curr)
    }, 0)
    return numDiffs / 2; // Divide by 2 since we don't need the change both letters, just one to the other
}
console.log(getMinimumDifference(['aa','bb'], ['cc','dd']));