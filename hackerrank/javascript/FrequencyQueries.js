// Complete the freqQuery function below.
// Initial attempt was using only a dict, however for op === 3 traversing the whole dict
// To find a matching frequency is expensive and caused it to timeout.
// Revised attempt uses an array to track frequency of integers in dict, so that it can be
// Checked in O(1) time for op === 3
function freqQuery(queries) {
    let dict = {};
    let outputArr = [];
    let freq = [];
    queries.map((currQuery) => {
        const op = currQuery[0];
        const x = currQuery[1];
        const initVal = dict[x] || 0;
        if (op === 1) {         // Add x to dict
            dict[x] = initVal + 1;
            freq[initVal] = (freq[initVal] || 0) - 1;
            freq[initVal + 1] = (freq[initVal + 1] || 0) + 1;
        } else if (op === 2 && initVal > 0) {  // Delete one occurance of x from dict
            dict[x] = initVal - 1;
            freq[initVal - 1]++;
            freq[initVal]--;
        } else if (op === 3) {  // Check if any element in dict with frequency x
            outputArr.push(freq[x] > 0 ? 1: 0);
        }
    });
    return outputArr;
}
console.log(freqQuery([ 
    [ 1, 5 ],
    [ 1, 6 ],
    [ 3, 2 ],
    [ 1, 10 ],
    [ 1, 10 ],
    [ 1, 6 ],
    [ 2, 5 ],
    [ 3, 2 ] ]))