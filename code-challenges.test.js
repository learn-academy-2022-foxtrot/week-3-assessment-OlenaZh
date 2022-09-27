// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//I put the template here
//describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//First, I install dependencies and run a command yarn add jest
//use a describe statement:
//use a describe method 
//describe ("fibonacciSequence", () => {})
//next, I use it statement which is nested inside describe block, to describe what the test is doing. 
// it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence ",() => {})
//next, I use expect statement to call the function and matcher method .toEqual.
//.toEqual contains the expected output of the function. It compare the actual output to the output in the test
//to run the tesy I use yarn jest command in the terminal

// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fibonacciSequence", () => {
//     it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence ", () => {
//       expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
//   })

  //FAIL ->  ReferenceError: fibonacciSequence is not defined

// b) Create the function that makes the test pass.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//first I declare a function and name it fibonacciSequence and pass a parameter n
//Fibonacci sequenses start with 0 and 1, so I create a new variable fibArray and add 0 and 1 as first elements of array
//Next, I create a new variable fibArrayFinal to store the final result of fib.sequenses calculation
//I preassigned 1 as a first element of my final array, as the expected output should start with 1.
//I use a for loop to calculate values of Fib sequences  where the next number in the sequence  is the sum of 2 previous numbers.
//I use .push() to add calculated values into my fibArrayFinal
// return fibArrayFinal;
const fibonacciSequence = (n) => {
  let fibArray = [0, 1]
  let fibArrayFinal = [1]

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2];
    fibArrayFinal.push(fibArray[i])
  }
  return fibArrayFinal;

}

//PASS

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

//First, I install dependencies and run a command yarn add jest
//use a describe statement:
// use a describe method that takes an object as an argument
// describe ("divisibleByThree", () => {})
//next, I use it statement which is nested inside describe block, to describe what the test is doing. 
// it("evaluates, decides and return a string if number is divisible by three or not, () => {})
//next, I use expect statement to call the function and matcher method .toEqual.
//.toEqual contains the expected output of the function. It compare the actual output to the output in the test
//to run the tesy I use yarn jest command in the terminal

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
