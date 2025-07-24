/**
 * NAIVE STRING SEARCH IMPLEMENTATION
 */

// function naiveSearch(long, short) {
//     var count = 0;
//     for (var i = 0; i < long.length; i++) {
//         for (var j = 0; j < short.length; j++) {
//             console.log(short[j], long[i + j]);
//             if (short[j] !== long[i + j]) {
//                 console.log('BREAK!!');
//                 break;
//             }
//             if (j === short.length - 1) {
//                 console.log('FOUND ONE!!')
//                 count++;
//             }
//         }
//     }
//     return count;
// }

function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {

            if (short[j] !== long[i + j]) break;

            if (j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch('lorie loled', 'lol'))
