/**
 * @param {String} str1 
 * @param {String} str2 
 */
var gcdOfStrings = function(str1, str2) {
    let tempString = '';
    let longestString = '';
    for(let i = 0; i < str1.length; ++i) {
        if(str1 === str2) {
            return str1;
        }
        if(str1[i] === str2[i]) {
            tempString+= str1[i];
        }
        if (str1.length % tempString.length === 0 && str2.length % tempString.length === 0) {
            if(tempString.repeat(str1.length/tempString.length) === str1 && tempString.repeat(str2.length/tempString.length) === str2){
                longestString = tempString;
            }
        }
    }
    return longestString;
}

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('ABABAB', 'ABAB')); // Should return 'AB'