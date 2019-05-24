// Complete the countTriplets function below.
// Initial attempt
// Works but bad runtime, times out on tests
function countTripletsSlow(arr, r) {
    let tripletCount = 0;
    for(let i = 0; i < arr.length-2; ++i) {
        for(let j = i+1; j < arr.length-1; ++j) {
            for (let k = j+1; k < arr.length; ++k) {
                if (arr[i] * r === arr[j] && arr[j] * r === arr[k]) {
                    tripletCount++;
                }
            }
        }
    }
    return tripletCount;
}

// Better approach, runs in O(N) time
// Iterates backwards through list storing each single element in a dict
// And each pair of potential triplets. If a third element is found which 
// Completes the triplet, it will increase the count by the number of doublets
// That will complete the triplet
function countTriplets(arr, r) {
    let tripletCount = 0;
    let singles = {};
    let doublets = {};
    for(let i = arr.length-1; i >= 0; --i) {
        if (arr[i] * r in doublets) {
            tripletCount += doublets[arr[i]*r];
        }
        if (arr[i] * r in singles) {
            if (arr[i] in doublets){
                doublets[arr[i]]+= singles[arr[i] * r];
            } else { 
                doublets[arr[i]] = singles[arr[i] * r];
            }
        }
        if (arr[i] in singles) {
            singles[arr[i]]++;
        } else {
            singles[arr[i]] = 1;
        }
    }
    return tripletCount;
}


console.log(countTriplets([1,2,2,4], 2));
console.log(countTriplets([1,3,9,9,27,81], 3));