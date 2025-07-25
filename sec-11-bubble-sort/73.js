// /**
//  * Lec 73 Bubble Sort: Implementation
//  */

// function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--) {
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1]) {
//                 // SWAP!  
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         console.log("ONE PASS COMPLETE!!")
//     }
//     return arr;
// }

// console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP!  
                swap(arr, j, j + 1);
            }
        }
        console.log("ONE PASS COMPLETE!!")
    }
    return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))