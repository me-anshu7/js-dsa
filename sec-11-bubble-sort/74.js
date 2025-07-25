/**
 * Bubble Sort: Optimization
 * Optimized with noSwaps
 */

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP!  
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        console.log("ONE PASS COMPLETE!!")
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));