/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */

var num1 = 13;
var num2 = 79;
var num3 = 45;

var largestNumber ;

if(num1 > num2 && num1 > num3) {
    largestNumber = num1;
}else if(num2 > num3 && num2 > num1) {
    largestNumber = num2;
}else{
    largestNumber = num3;
}
console.log(largestNumber);
