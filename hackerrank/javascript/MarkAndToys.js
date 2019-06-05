// Determines the most prices that can be bought for <= k
// Was stumped for a while, since the values on Hackerrank are being read in as strings
// So the sorted array was [1, 100, 25, ...] rather than sorted by integer.
// Had to create a sort function to parseInt.
// Also using forloop instead of .map so that I can break when you have passed the last val
const maximumToys = (prices, k) => {
    let count = 0;
    prices.sort(sortFunc);
    
    // prices.map(curr => {
    //     if (curr <= k) {
    //         k-= curr;
    //         count++;
    //     }
    // });

    for(let i =0;i < prices.length; ++i) {
        if (prices[i]<=k){
            count++;
            k-=prices[i];
        } else{
            break;
        }
    }
    return count;
}

const sortFunc = (a,b) => {
    return parseInt(a) - parseInt(b);
}

console.log(maximumToys([5,2,3,4,1], 6));