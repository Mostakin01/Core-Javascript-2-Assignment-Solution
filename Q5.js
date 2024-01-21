// You are developing a program to manage a list of unique items. Write a JavaScript program that uses a 
// Set to store a collection of unique numbers. Use the Map object to associate each number with its square. 
// Finally, print both the unique numbers and their corresponding squares.

// create a Set to store unique numbers
var numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// create a Map to store the squares of the numbers
var squares = new Map();

// iterate over the Set and add the squares to the Map
for (let num of numbers) {
  squares.set(num, num * num);
}

// print the numbers and their squares
for (let [num, square] of squares) {
  console.log(num + " = " + square);
}
