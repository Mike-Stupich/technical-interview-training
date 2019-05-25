// Complete the alternatingCharacters function below.
// Straightforward question, simply need to track the element in front of curr
// And if its the same, increase numDeletions and move along the string
function alternatingCharacters(s) {
    let numDeletes = 0;
    let k = 1;
    for (let i = 0; i+k < s.length; ++i) {
        let curr = s[i];
        let next = s[i+k];
        if (curr === next) {
            numDeletes++;
        }
    }
    return numDeletes;
}

console.log(alternatingCharacters('AAAA'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('AAABBB'))