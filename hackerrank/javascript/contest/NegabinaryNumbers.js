// Solved with help from discussion page after contest time was over
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const addNegabinary = (arr1, arr2) => {
    let ret = [];
    const maxLen = Math.max(arr1.length, arr2.length);
    let carry = 0;
    for(let bit = 0; bit < maxLen || carry !== 0; ++bit) {
        const b1 = bit < arr1.length ? arr1[arr1.length - bit - 1] : 0;
        const b2 = bit < arr2.length ? arr2[arr2.length - bit - 1] : 0;
        const sum = b1 + b2 + carry;
        ret.push(Math.abs(sum) % 2);
        carry = sum < 0 ? 1 : sum > 1 ? -1 : 0;
    }
    while(ret.length > 1 && ret[ret.length-1] === 0) {
        ret.pop();
    }
    ret.reverse();
    return ret;
}

console.log(addNegabinary([1,1,1,1,1], [1,0,1])); // [1,0,0,0,0]
console.log(addNegabinary([1,1,0,1,0], [1,1,1]));