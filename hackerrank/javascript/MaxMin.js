const maxMin = (k, arr) => {
    arr.sort((a,b) => a-b);
    let diff = Infinity;
    for( let i = 0; i < arr.length - k +1; ++i) {
        let currDiff = Math.abs(arr[i+k-1] - arr[i])
        if (currDiff < diff) {
            diff = currDiff;
        }
    }
    return diff;
}

console.log(maxMin(2, [1,2,1,2,1]));
console.log(maxMin(4, [1,2,3,4,10,20,30,40,100,200]));
