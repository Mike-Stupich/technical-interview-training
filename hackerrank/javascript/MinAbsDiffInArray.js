// Straightforward solution, times out on 2 test cases thought
const minimumAbsoluteDifferenceSlow = arr => {
    
    let minDiff = Infinity;
    for (let i = 0 ; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (Math.abs(arr[i] - arr[j]) < minDiff) {
                minDiff = Math.abs(arr[i] - arr[j]);
            }
        }
    }
    return minDiff
}

const minimumAbsoluteDifference = arr => {
    arr.sort();
    let minDiff = Infinity;

    for(let i =0; i < arr.length -1; ++i) {
        if (Math.abs(arr[i] - arr[i+1]) < minDiff) {
            minDiff = Math.abs(arr[i] - arr[i+1])
        }
    }

    return minDiff;
}


console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));