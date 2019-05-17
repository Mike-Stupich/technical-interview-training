// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    if (!s1 || !s2) {
        return 'NO';
    }
    let arr = new Array(26).fill(0);
    for (let i = 0; i < s1.length; ++i) {
        arr[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let j = 0; j < s2.length; ++j) {
        if (arr[s2[j].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
            return 'YES';
        }
    }
    return 'NO';
}

const s1 = 'hello';
const s2 = 'world';

console.log(twoStrings(s1,s2));