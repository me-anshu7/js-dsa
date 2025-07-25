/**
 * Example: Passing comparator function to sort
 * Telling JS how to sort
 */

// function numberCompare(num1, num2) {
//     // return num1 - num2;  // -> [ 4, 6, 10, 15 ]
//     return num2 - num1;     // -> [ 15, 10, 6, 4 ]
// }

// console.log([6, 4, 15, 10].sort(numberCompare));

function compareByLen(str1, str2) {
    // rather than alphabatically, sort according to string length
    return str1.length - str2.length;   // -> [ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
}

console.log(["Steele", "Colt", "Data Structures", "Algorithms"]
    .sort(compareByLen));