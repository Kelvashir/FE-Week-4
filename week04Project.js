// All questions should be printed to your Browser's console using console.log()

console.log(
  `Question 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
  
    Programmatically subtract the value of the first element in the array from the value in the last element of the array.

        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!

    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    
    Use a loop to iterate through the array and calculate the average age.`
);
//Creating array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`*****   Question 1 answer(s)   *****`);
console.log(ages);
//Subtracting first array element value from last array element value
console.log(ages[ages.length - 1] - ages[0]);
//adding new element to array
ages.push(50);
console.log(ages);

//repeating previous code to make sure it works
console.log(ages[ages.length - 1] - ages[0]);
console.log(`------------------------------------------`);
console.log(`Question 2 - Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

    Use a loop to iterate through the array and calculate the average number of letters per name.

    Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);
console.log(`*****   Question 2 answer(s)   *****`);
//creating array
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
//iterating through array and calculating avg number of letters per name
let sum = 0;
for (let i = 0; i < names.length; i++) {
  sum += names[i].length;
}
console.log(sum / names.length);
//iterating through the array to concatenate the names together
let combinedNames = names[0];
for (let i = 1; i < names.length; i++) {
  combinedNames += " " + names[i];
}
console.log(combinedNames);
console.log(`------------------------------------------`);
console.log(`Question 3 - How do you access the last element of any array?`);
console.log(`*****   Question 3 answer(s)   *****`);
console.log(`By taking the length of the array and subtracting one from it.`);
console.log(`------------------------------------------`);

console.log(`Question 4 - How do you access the first element of any array?`);
console.log(`*****   Question 4 answer(s)   *****`);
console.log(`By choosing the 0 index of the array or nameOfArray[0].`);
console.log(`------------------------------------------`);

console.log(`Question 5 - Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

    For example:

    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array`);
console.log(`*****   Question 5 answer(s)   *****`);
//Creating array and filling it with values equalt to the lengths of the names in the name array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths[i] = names[i].length;
}
console.log(nameLengths);

console.log(`------------------------------------------`);

console.log(
  `Question 6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`
);
console.log(`*****   Question 6 answer(s)   *****`);
//iterating through nameLengths array and summing elements
let sumOfNameLengths = 0;
for (let i = 0; i < names.length; i++) {
  sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths);
console.log(`------------------------------------------`);

console.log(
  `Question 7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`
);
console.log(`*****   Question 7 answer(s)   *****`);
//creating function that concats the first argument to itself a number of times equal to the second argument
let newString = "";
const selfConcat = (word, n) => {
  for (let i = 1; i <= n; i++) {
    newString += word;
  }
  return newString;
};
console.log(selfConcat("Superman", 3));
console.log(`------------------------------------------`);

console.log(
  `Question 8 - Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`
);
console.log(`*****   Question 8 answer(s)   *****`);
//This function takes a first and second parameter and concatenates them together with a space between
let firstName = "Bruce";
let lastName = "Wayne";
const fullName = (firstName, lastName) => firstName + " " + lastName;
console.log(fullName(firstName, lastName));
console.log(`------------------------------------------`);

console.log(
  `Question 9 - Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`
);
console.log(`*****   Question 9 answer(s)   *****`);
//This function returns true if the sum of the elements in the array is greater than 100
//namesLength array should return false and q9Array should return true
let q9Array = [45, 56, 78, 89];
let sumOfArray = 0;
const checkSumOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    sumOfArray += array[i];
  }
  if (sumOfArray > 100) {
    return true;
  } else {
    return false;
  }
};
console.log(checkSumOfArray(q9Array));

console.log(`------------------------------------------`);

console.log(
  `Question 10 - Write a function that takes an array of numbers and returns the average of all the elements in the array.`
);
console.log(`*****   Question 10 answer(s)   *****`);
//Similar to the above function except this function will average the elements
let arrayOfNumbers = 0;
const arrayAverager = (array) => {
  for (let i = 0; i < array.length; i++) {
    arrayOfNumbers += array[i];
  }
  return arrayOfNumbers / array.length;
};
console.log(arrayAverager(q9Array));
console.log(`------------------------------------------`);

console.log(
  `Question 11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`
);
console.log(`*****   Question 11 answer(s)   *****`);
//This function will compare the element averages of two arrays and return true if the first is higher then the second
let arrayOne = [1, 2, 3, 4];
let arrayTwo = [7, 8, 9, 10];
const arrayComparor = (array1, array2) => {
  if (arrayAverager(array1) > arrayAverager(array2)) {
    return true;
  } else {
    return false;
  }
};
console.log(arrayComparor(arrayOne, arrayTwo));
console.log(arrayComparor(q9Array, nameLengths));
console.log(`------------------------------------------`);

console.log(
  `Question 12 - Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`
);
console.log(`*****   Question 12 answer(s)   *****`);
//This function compares a value and returns true if that value is greater than 10.50
let isHotOutside = true;
let moneyInPocket = 10;
const willBuyDrink = (isHotOutside, moneyInPocket) => {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
};
console.log(willBuyDrink(isHotOutside, moneyInPocket));
moneyInPocket = 13;
console.log(willBuyDrink(isHotOutside, moneyInPocket));
console.log(`------------------------------------------`);

console.log(
  `Question 13 - Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`
);
console.log(`*****   Question 13 answer(s)   *****`);
//This method checks two conditions and returns a value of true or false
//I created this method to solve the problem of whether or not someone can check an item out
let isItemAvailable = true;
let hasLibraryCard = false;
const allowItemCheckout = (isItemAvailable, hasLibraryCard) => {
  if (isItemAvailable && hasLibraryCard) {
    return true;
  }
  return false;
};
console.log(allowItemCheckout(isItemAvailable, hasLibraryCard));
