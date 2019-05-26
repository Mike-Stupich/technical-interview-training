// n = length of s, s = string to check for palindromes
// Iterate through list with double for loop to check if palindromes exist.
// If s[i] === s[k] and there has been either 1 or 0 different chars between them
// then palinsCount will increase. Otherwise take note of the different character 
// and if s[i] shows up again with no other letters between it, increase palins
const substrCount = (n, s) => {
    let palins = s.length;
    for(let i = 0; i < s.length; ++i) {
        let diff_char = -1;
        for(let k = i + 1; k < s.length; ++k) {
            if (s[i] === s[k]) {
                if (diff_char === -1) {
                    palins++;
                } else if (k - diff_char === diff_char - i) {
                    palins++;
                    break;
                }
            } else {
                if (diff_char === -1) {
                    diff_char = k;
                } else {
                    break;
                }
            }
        }
    }
    return palins;
};

console.log(substrCount(4, 'aaaa'));
console.log(substrCount(7, 'abcbaba'));
console.log(substrCount(5, 'abbba'));
