// Stores freq of each letter in array of size 26. Iterates through and holds least and second least values
// Uses them to determine if a single letter can be removed to have all letters present occur same number
// of times. Conditionals to check aren't very pretty but it works.
const isValid = s => {
    let retVal = 'NO';
    let arr = new Array(26).fill(0);
    for (let i = 0 ; i < s.length; ++i ) {
        arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let totalVal = 0;
    let totalNums = 0;
    let least = 0;
    let secondLeast = 0;
    arr.map(curr => {
        if (curr > 0) {
            totalVal+= curr;
            totalNums++;
            if (curr < least || least === 0) {
                secondLeast = least;
                least = curr;
            }
        }
    });
    if (totalVal / totalNums === least || (totalVal - 1) / totalNums === least) {
        retVal = 'YES';
    } else if (least === 1 && (totalVal - 1) / (totalNums - 1) ===  secondLeast){ 
        retVal = 'YES';
    }
    return retVal;
}

// console.log(isValid('aabbcd')); // Should be NO
// console.log(isValid('abcdefghhgfedecba')); //Should be YES
console.log(isValid('aabbc')); // Should be YES