// Very simple problem where just need to add a counter to the bubble sort and
// Print data out in a formatted way

const countSwaps = a => {
    let numSwaps = 0;
    for (let i = 0; i < a.length; ++i){ 
        for (let j = 0; j < a.length - 1; ++j) {
            // Swap elements if they are in decreasing order
            if (a[j] > a[j+1]) {
                const temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                numSwaps++;
            }
        }
    }
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First element: ${a[0]}`);
    console.log(`Last element: ${a[a.length-1]}`);
}

countSwaps([3,2,1])