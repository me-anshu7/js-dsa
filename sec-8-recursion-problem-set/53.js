/**
 * Coding Exercise 16: power
 *
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()
 * - do not worry about negative bases and exponents.
 */

// function power(base, exponent) {
//     if (exponent === 0) return 1;
//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 0));
// console.log(power(2, 2));
// console.log(power(2, 4));


/**
 * Coding Exercise 17: factorial
 * 
 * Write a function factorial which accepts a number and returns the factorial 
 * of the number. A factorial is the product of an integer and all the integers below it;
 * e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
 * factorial zero (0!) is always 1.
 */

// function factorial(num) {
//     if (num === 1 || num === 0) return 1
//     return num * factorial(num - 1)
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));


/**
 * Coding Exercise 18: productOfArray
 * 
 * Write a function called productOfArray which takes in an array of numbers and 
 * returns the product of them all.
 */

// productOfArray([1, 2, 3])   // 6
// productOfArray([1, 2, 3, 10])   // 60

// // Not a very effective solution
// const productOfArray = (nums) => {
//     if (Array.isArray(nums) && nums.length === 0) return 1;
//     return nums[0] * productOfArray(nums.slice(1));
// }

// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));
