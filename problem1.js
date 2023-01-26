/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);
// b) Remove ‘Orange’ 
 fruits.pop()
console.log(fruits); // remove the banana from the list

// c) add  'watermelon' to the list
fruits.push('Watermelon');
console.log(fruits); // add 'watermelon' to the list

