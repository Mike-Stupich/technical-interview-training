/** My original answer. Times out on larger test cases.
 * 
 * @param {Int[]} expenditure Array of users daily expenditures
 * @param {Int} d Number of trailing days to compare to
 */
const activityNotificationsSlow = (expenditure, d) => {
    let arr = new Array(d);
    let numNotifs = 0;
    let median = Infinity;
    for(let i = 0; i < expenditure.length; ++i) {
        if (i > d - 1 ) {
            let sortedArr = arr;
            sortedArr.sort()
            if(d%2 == 0) { 
                median = sortedArr[Math.floor(d / 2)] + sortedArr[Math.ceil(d / 2) ] / 2;
            } else {
                median = sortedArr[Math.floor(d / 2)]
            }
            arr.shift()
            if (expenditure[i] >= 2 * median) {
                numNotifs++;
            }
        }
        arr.push(expenditure[i])
    }

    return numNotifs;
}

// Discussion page suggests using counting sort
const activityNotifications = (expenditure, d) => {
    let countSort = new Array(201).fill(0) //0 <= expenditure[i] <= 200
    let numNotifs = 0;

    let [ ind1, ind2 ] = [Math.floor((d - 1) / 2), Math.ceil((d-1) /2)];
    let median, m1, m2;

    // Add first d elements to countSort array
    for(let i = d - 1; i >= 0; --i) {
        countSort[expenditure[i]]++;
    }

    // Iterate through expenditures to find the median
    for (let i = d ; i < expenditure.length; ++i) {
        // Find lower median if d === even
        for(let j = 0, k = 0; k <=ind1; k+=countSort[j], j++) {
            m1 = j;
        }
        // Higher median if d === even
        for(let j = 0, k = 0; k <=ind2; k+=countSort[j], j++) {
            m2 = j;
        }
        median = (m1 + m2) / 2;
        
        // Increment numNotifs if 2* median
        if (expenditure[i] >= median * 2) {
            numNotifs++;
        }
        // Replace countSort element
        countSort[expenditure[i - d]]--
        countSort[expenditure[i]]++;
    }
    return numNotifs;
}

console.log(activityNotifications([1,2,3,4,5], 3)); // should be 1
console.log(activityNotifications([2,3,4,2,3,6,8,4,5], 5)); // should be 2
