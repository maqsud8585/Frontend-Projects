
// (.lenght method) This is a simple JavaScript program that counts the number of characters in a tweet and informs the user how many characters they have left out of a maximum of 180.

/*var tweet = prompt("Enter the characters");
  var tweetCount = tweet.length;
  alert("you had entered "+tweetCount+" you have "+(180-tweetCount)+" left");*/


// (.slice method)This program prompts the user to enter their full name and then displays an alert with the first 15 characters of their name.

/*var name = prompt("Enter your full name");
  var showName = alert("your name is " + name.slice(0,15)+" ");*/


// (String Conacatenation) This program demonstrates how to declare and reassign a variable in JavaScript.

/*var gameLevel = prompt("Enter your game level, and we upgrade it to the next level");
gameLevel = ++gameLevel; 
alert("Your Game Level is " +gameLevel+"");*/


// ( toUpperCase method) This program prompts the user to enter their name and then displays an alert with their name in uppercase letters.

/*var yourName = prompt("Enter your name");
var upperCaseName = alert("Your name in uppercase is " + yourName.toUpperCase() + " ");*/


// (toLowerCase method) This program prompts the user to enter their name and then displays an alert with their name in lowercase letters.

/*var yourName = prompt("Enter your name");
var lowerCaseName = alert("Your name in lowercase is " + yourName.toLowerCase() + " ");*/


// (Arithmetic Operators) This program prompts the user to enter their age and then calculates their age in dog years, assuming that the first two years of a dog's life count as 21 human years, and each subsequent year counts as 4 human years.

/*var dogAge = prompt("Enter your dog age in human years");
var dogAgeToHumanAge = (dogAge - 2) * 4 + 21;
alert("Your dog age in human years is " + dogAgeToHumanAge + " years old");*/


// (Increment and Decrement Operators) This program demonstrates the use of increment and decrement operators in JavaScript by prompting the user to enter a number, then incrementing and decrementing that number, and displaying the results.

/*var number = prompt("Enter a number");
var incrementedNumber = ++number;
var decrementedNumber = --number;
alert("The incremented number is " + incrementedNumber + " and the decremented number is " + decrementedNumber + " ");*/


// (functions) This program defines a function that prompts the user to enter a number, squares it, and then displays an alert with the squared result.

/*function squareNumber() {
  var number = prompt("Enter a number to square it");
  var squaredNumber = number * number;
  alert("The square of " + number + " is " + squaredNumber + " ");
  
}
// Call the function to execute it
squareNumber();*/

//(function ) BMI Calculator: This program defines a function that calculates the Body Mass Index (BMI) based on user input for weight and height, and then displays the result in console

/*function calculatorBmi(weight, height)  {
 let bmi = weight / (height * height);
 return Math.round(bmi);
}

// Call the function with example values
var result = calculatorBmi(52, 1.6);
console.log("your BMI is " + result + " ");*/


// (Math.random() method) This program generates a random number between 0 and 5, inclusive, and displays it in the console.


/*var n = Math.random();
n = n * 6;
n = Math.floor(n)+1;
console.log("Random number is " + n + " ");*/

// (Control statements) This program prompts the user to enter a number and then checks if the number is even or odd, displaying the result in an alert. 

/*var number = prompt("Enter a number");
if (number % 2 === 0) {
  alert("The number " + number + " is even");
}
else {
  alert("The number " + number + " is odd");
}*/

// (Switch statement) This program prompts the user to enter a number between 1 and 5, and then displays a message based on the entered number using a switch statement.  

/*var number = prompt("Enter a number between 1 and 5");
switch (number) {
  case "1":
    alert("You entered one");
    break;
  case "2": 
    alert("You entered two");
    break;
  case "3":
    alert("You entered three");
    break;
  case "4":
    alert("You entered four");
    break;
  case "5":
    alert("You entered five");
    break;
  default:
    alert("Invalid number, please enter a number between 1 and 5");
    break;
}*/

// (comparison operators) This program prompts the user to enter their age and then checks if they are eligible to vote (age 18 or older) using comparison operators.

/*var age = prompt("Enter your age");
if (age >= 18) {
  alert("You are eligible to vote");
}
else {
  alert("You are not eligible to vote");
}*/


// (Logical operators) This program prompts the user to enter their age and whether they have a driver's license, and then checks if they are eligible to drive using logical operators.

/*var age = prompt("Enter your age");
var hasLicense = prompt("Do you have a driver's license? (yes/no)");
if (age >= 18 && hasLicense.toLowerCase() === "yes") {  
  alert("You are eligible to drive");
}
else {
  alert("You are not eligible to drive");
}*/

// ( And Or Operators) This program prompts the user to enter an year and then checks if it is a leap year using the AND and OR operators.

/* let year = Number (prompt("Enter an Year"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
 alert("It is a leap Year");
}
else {
 alert("It is not a leap year");
} */


// (Arrays)

/*let fruits = ["apple", "banana", "orange", "grape"];
console.log("Fruits: " + fruits + " "); // shows the elements of array. 

console.log(fruits.includes("apple")); // checks if the array includes "apple".

console.log(fruits[2]); // Accesses the third element of the array (index 2).

console.log(fruits.length); // Displays the number of elements in the array.

console.log(fruits.indexOf("banana")); // Finds the index of "banana" in the array.

console.log(fruits.join(", ")); // Joins the elements of the array into a string

console.log(fruits.sort()); // Sorts the array in alphabetical order.

console.log(fruits.reverse()); // Reverses the order of the elements in the array.

console.log(fruits.push("kiwi")); // Adds "kiwi" to the end of the array and returns the new length.

console.log(fruits.pop()); // Removes the last element from the array and returns it.

console.log(fruits.shift()); // Removes the first element from the array and returns it.

console.log(fruits.unshift("mango")); // Adds "mango" to the beginning of the array and returns the new length.

console.log(fruits.splice(1, 2, "pear")); // Removes 2 elements starting from index 1 and adds "pear" in their place.

console.log(fruits.slice(1, 3)); // Creates a new array containing elements from index 1 to index 3 (not inclusive).

console.log(fruits.forEach(fruit => console.log(fruit))); // Iterates through each element in the array and logs it to the console.

console.log(fruits.map(fruit => fruit.toUpperCase())); // Creates a new array with each element converted to uppercase.

console.log(fruits.filter(fruit => fruit.startsWith("a"))); // Creates a new array containing elements that start with "a".

console.log(fruits.reduce((acc, fruit) => acc + fruit + " ", "")); // Concatenates all elements into a single string with spaces in between.

console.log(fruits.find(fruit => fruit === "banana")); // Finds the first element that matches "banana".

console.log(fruits.findIndex(fruit => fruit === "orange")); // Finds the index of the first element that matches "orange".

console.log(fruits.every(fruit => fruit.length > 2)); // Checks if every element in the array has a length greater than 2.

console.log(fruits.some(fruit => fruit.length < 5)); // Checks if at least one element in the array has a length less than 5.

console.log(fruits.concat(["kiwi", "mango"])); // Combines the current array with another array containing "kiwi" and "mango".

console.log(fruits.toString()); // Converts the array to a string representation.

console.log(fruits.fill("grape", 1, 3)); // Fills elements from index 1 to index 3 with "grape".

console.log(fruits.copyWithin(0, 2)); // Copies elements from index 2 to the beginning of the array.

console.log(fruits.flat()); // Flattens the array (useful if it contains nested arrays).

console.log(fruits.flatMap(fruit => fruit.split(""))); // Splits each fruit into individual characters and flattens the result.

console.log(fruits.sort((a, b) => a.localeCompare(b))); // Sorts the array in alphabetical order using locale comparison.

console.log(fruits.reverse()); // Reverses the order of the elements in the array.

console.log(fruits.slice(1, 3)); // Creates a new array containing elements from index 1 to index 3 (not inclusive).

console.log(fruits.splice(1, 2, "pear")); // Removes 2 elements starting from index 1 and adds "pear" in their place. */


// (Fizzbuzz) if a number divisible by 3 shows "Fizz" if by 5 shows "Buzz" if both "FizzBuzz".

/*var output = [];
count = 1;
function fizzbuzz() {
  while (count <= 10) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
    console.log(output);
  }
}

fizzbuzz();*/

// (WhosPaying) This program randomly selects a person from an array of names to determine who will pay for lunch.


/*var names = ["Max","Anas","Rehan","Juned","Areeb","Dawood"];

function whosPaying() {
 var numberOfPeople = names.length;
 var randomPersonPosition = Math.floor(Math.random()* numberOfPeople);
 var randomPerson = names[randomPersonPosition];
 return randomPerson + " is going to buy Lunch ";
}*/


// (Beer Song) This program prints the lyrics of the "99 Bottles of Beer" song, counting down from 99 bottles to no more bottles.

/* var beer = 99;
function beerSong() {
  while (beer > 0) {
    console.log(beer + " bottles of beer on the wall, " + beer + " bottles of beer.Take one down and pass it around. " + (beer - 1) + " bottles of beer on the wall.");
    beer--;
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
} */


// (Fibonacci Generator) This program generates the first 20 numbers in the Fibonacci sequence and stores them in an array, then logs the array to the console.

/* function fibonacciGenerator() {
 let input = prompt("Enter the number of Fibonacci numbers you want!")
 let a = 0;
 let b = 1;
 var arr = [0, 1];
   for (let i=0; i<=input; i++) {
        let c = (a+b);
       //  let d = (b+c);
         arr.push(c);
         a = b;
         b = c;
   }
   console.log(arr);
 }*/

// (Object Literals) This program creates an object representing a bellboy with properties such as name, age, work permit status, and languages spoken.

/*var bellBoy = {
   name: "Timmy",
   age: 25,
   hasWorkPermit: true,
   languages: ["English", "Spanish", "French"],
 }
 console.log(bellBoy); */

// (Constructor Function) This program defines a constructor function for creating BellBoy objects with properties such as name, age, work permit status, and languages spoken.

/*function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.clean = function(){
    console.log(this.name + " is cleaning the room.");
  }
}


let bellboy1 = new BellBoy("Tom", 28, false, "English");
// var bellboy2 = new BellBoy("Jerry", 30, true, ["Spanish", "French"]);
bellboy1.clean(); // Calls the clean method of bellboy1*/

// (callback function) 

/* function photoDevelopKar(name, callback) {
  console.log("Photo developing for " + name);
  callback(); // callback function ko call kiya
}

function callCustomer() {
  console.log("Sir, aapka photo ready hai. 🙋");
}

function callCustomer2() {
  console.log("Sir, aapka photo abhi ready nahi hai. 🙋");
}

photoDevelopKar("Maqsud", callCustomer2); */













