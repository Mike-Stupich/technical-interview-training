// Couldn't solve on my own, hint from discussion: 
// So, the problem is transformed to: Find the i-th row, which has the most same or totaly different rows in the matrix.
// This response works but time complexity is horrible, better answer seems to be with a dict
const maxEqualRowsAfterFlips = matrix => {
    let ans = 0;
    const n = matrix[0].length; // num columns
    const m = matrix.length; // num rows
    let flipped = new Array(n);
    for (let i = 0 ; i < m; ++i) {
        let count = 0;

        for(let j = 0; j < n; ++j) {
            flipped[j] = 1 - matrix[i][j];
        }

        for(let k = 0; k < m; ++k) {
            let matchFlip = true;
            let matchMats = true;
            for(let x = 0; x < n; ++x) { // Have to check elements individually for flipped array
                if (matrix[k][x] !== flipped[x]){
                    matchFlip = false;
                    break;
                }
            }
            for(let x = 0; x < n; ++x) { // Have to check elements individually for flipped array
                if (matrix[k][x] !== matrix[i][x]){
                    matchMats = false;
                    break;
                }
            }
            if(matchMats || matchFlip) {
                count++;
            }
        }
        ans = Math.max(ans, count);
    }
    return ans;
}

console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]])); // Should be 2
console.log(maxEqualRowsAfterFlips([[0,1],[1,0]])); // Should be 2
console.log(maxEqualRowsAfterFlips([[1,0,0,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,0,0,1,0,0],[1,0,0,0,1,1,1,0,1,1,1],[1,0,0,0,1,0,0,0,1,0,0],[1,1,1,0,1,1,1,0,1,1,1]]));
