/**
 * Binary Search Solution
 */
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);

//     while (arr[middle] !== elem && start <= end) {
//         if (elem < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if (arr[middle] == elem) {
//         return middle
//     }
//     return -1
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15))

// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M              E

// [2, 5, 6, 9, 13, 15, 28, 30]
//              S    M      E


function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;

        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15))