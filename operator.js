// Declare two let variables num1 and num2
let num1 = 10;
let num2 = 5;

// ADDITION
let sum = num1 + num2;
console.log(sum ); //15

// SUBTRACTION
let difference = num1 - num2;
console.log(difference ); //10

// MULTIPLICATION
let product = num1 * num2;
console.log(product ); //50

// DIVISION
let division = num1 / num2;
console.log( division); //2

// REMAINDER
let remainder = num1 % num2;
console.log(remainder); // 0

/*Use the increment (++) and decrement (--) operators to 
increase and decrease the value of a variable num1and num2 by 1,
 respectively*/

// Increment num1 by 1
num1++;

// Decrement num2 by 1
num2--;

// The new values of num1 and num2
console.log(num1++);    //11
console.log(num2--);   // 4




/*Use the prompt() function to get two inputs from 
the user and then store them in input1 and input2 let variables. */

//  the first input from the user
let input1 = prompt("What is your name:");

//  the second input from the user
let input2 = prompt("How old are you?");

//  the user's inputs
alert("Your name is " + input1 + " and your are  " + input2  + "years old");



// convert the input to numbers using the parseFloat() function
let input = ("1.235");
let result =parseFloat(input);
console.log(result);


/*use the various arithmetic operators such as +, -, *, /, and % 
to perform basic mathematical operations based on the user input */

// Get the first input from the user
let firstNumber = prompt("Enter the first number: "); //

// Get the second input from the user
let secondNumber = prompt("Enter the second number: ");

// ADDITION
  firstNumber + secondNumber
console.log("The addition is " + firstNumber + secondNumber); 
/*I COULDN'T DECLARE SUM BECAUSE I HAVE DECLARE IT IN THE FIRST ADDITION I DID.*/

// SUBTRACTION
let subtraction = firstNumber - secondNumber;
console.log("The subtraction is " + subtraction);

// MULTIPLICATION
firstNumber * secondNumber;
console.log("The product is " + firstNumber * secondNumber);

// DIVISION
firstNumber / secondNumber;
console.log("The quotient is " + firstNumber / secondNumber);

// REMAINDER
firstNumber % secondNumber;
console.log("The remainder is " + firstNumber % secondNumber);



