// Variable declarations for testing type conversion and coercion.
let score = 33;                // A number value
let score1 = "33";             // A string containing a numeric value
let score2 = "33aa";           // A string containing non-numeric characters
let score3 = null;             // A null value
let score4 = undefined;        // An undefined value
let score5 = true;             // A boolean true
let score6 = false;            // A boolean false
let score7 = "Santosh Kumar";  // A string with alphabetic characters

// Function to display structured logs for a value
function logDetails(variable, variableName) {
    console.log(`\n-- Analyzing "${variableName}" --`);
    console.log(`Original Value: ${variable}`);
    console.log(`Original Type: ${typeof variable}`);
    
    // Convert to Number and log details
    let valueInNumber = Number(variable);
    console.log(`Converted to Number: ${valueInNumber}`);
    console.log(`Type after Conversion: ${typeof valueInNumber}`);
}

// Log details for each variable
logDetails(score, "score");
logDetails(score1, "score1");
logDetails(score2, "score2");
logDetails(score3, "score3");
logDetails(score4, "score4");
logDetails(score5, "score5");
logDetails(score6, "score6");
logDetails(score7, "score7");

// Explanation of results:
// - Strings containing only numbers are converted to numbers (e.g., "33" becomes 33).
// - Non-numeric strings result in NaN (e.g., "33aa" becomes NaN).
// - null converts to 0, while undefined becomes NaN.
// - true converts to 1, and false to 0.

// Boolean conversion examples
console.log("\n-- Boolean Conversion Examples --");

// Testing truthy and falsy values
let isLoggedIn = 1;               // Numeric 1
let isLoggedIn1 = 0;              // Numeric 0
let isLoggedIn2 = "";             // Empty string
let isLoggedIn3 = "Santosh Kumar"; // Non-empty string

// Convert each to Boolean and log the results
console.log(`Boolean(1): ${Boolean(isLoggedIn)}`);      // true
console.log(`Boolean(0): ${Boolean(isLoggedIn1)}`);    // false
console.log(`Boolean(""): ${Boolean(isLoggedIn2)}`);   // false
console.log(`Boolean("Santosh Kumar"): ${Boolean(isLoggedIn3)}`); // true

// Explanation of results:
// - 1 converts to true, while 0 converts to false.
// - Empty strings are falsy, while non-empty strings are truthy.

// String conversion examples
console.log("\n-- String Conversion Examples --");

let someNumber = 33; // A numeric value
let stringNumber = String(someNumber); // Convert to string

// Log details for the string conversion
console.log(`Original Number: ${someNumber}`);
console.log(`Converted to String: "${stringNumber}"`);
console.log(`Type after Conversion: ${typeof stringNumber}`);

// Explanation of results:
// - The number 33 converts to the string "33".

// Operations in JavaScript
console.log("\n-- Operations in JavaScript --\n");

// Initializing a variable with a positive value
let value = 5;
console.log("Initial Value:", value);

// Performing negation operation
let negativeValue = -value;
console.log("Negated Value:", negativeValue); // Output: -5  

// Demonstrating Basic Arithmetic Operations in JavaScript
console.log("\n-- Demonstrating Basic Arithmetic Operations in JavaScript --\n");

// Defining two numbers for demonstration  
const num1 = 2;
const num2 = 2;
console.log(`Numbers: num1 = ${num1}, num2 = ${num2}\n`);

// Performing arithmetic operations and logging the results  
console.log(`Addition: ${num1} + ${num2} =`, num1 + num2);
console.log(`Subtraction: ${num1} - ${num2} =`, num1 - num2);
console.log(`Multiplication: ${num1} * ${num2} =`, num1 * num2);
console.log(`Division: ${num1} / ${num2} =`, num1 / num2);
console.log(`Exponentiation (Power): ${num1} ** ${num2} =`, num1 ** num2);
console.log(`Modulus (Remainder): ${num1} % ${num2} =`, num1 % num2);

console.log("\n-- String Concatenation in JavaScript --\n");

// Declare and initialize two string variables
let string1 = "Hello";
let string2 = " Santosh";

console.log("String 1:", string1);
console.log("String 2:", string2);

// Concatenate the two strings
let string3 = string1 + string2;
console.log("Concatenated String:", string3); // Output: "Hello Santosh"

console.log("\n-- Demonstrating Different Cases of String and Number Concatenation: --\n");
console.log("\"1\" + 2 =", "1" + 2); // Output: "12" ("1" is a string, 2 is converted to "2", result: "12")
console.log("1 + \"2\" =", 1 + "2"); // Output: "12" (1 is converted to "1", then concatenated with "2")
console.log("\"1\" + \"2\" =", "1" + "2"); // Output: "12" (Both operands are strings, simple concatenation)
console.log("1 + 2 =", 1 + 2); // Output: 3 (Both operands are numbers, so arithmetic addition is performed)

console.log("\"1\" + 2 + 3 =", "1" + 2 + 3); // Output: "123" ("1" is a string, 2 is converted to "2", then "12" + "3" gives "123")
console.log("\"1\" + \"2\" + 3 =", "1" + "2" + 3); // Output: "123" ("1" + "2" -> "12", then "12" + "3" -> "123")
console.log("1 + 2 + \"3\" =", 1 + 2 + "3"); // Output: "33" (1 + 2 -> 3, then "3" + "3" gives "33" as a string)
console.log("1 + \"2\" + \"3\" =", 1 + "2" + "3"); // Output: "123" (1 is converted to "1", then concatenated with "2" and "3")
console.log("\"1\" + \"2\" + \"3\" =", "1" + "2" + "3"); // Output: "123" (All operands are strings, so they concatenate directly)
console.log("1 + 2 + 3 =", 1 + 2 + 3); // Output: 6 (All operands are numbers, so arithmetic addition is performed)

// Illustrating the numerical conversion of boolean and string values
console.log("\n-- Numerical Conversion of Boolean and String Values --\n");

// Convert 'true' to a number using the unary plus (+) operator
console.log("+true:", +true); // Output: 1

// Convert 'true' to a negative number using the unary minus (-) operator
console.log("-true:", -true); // Output: -1

// Convert 'false' to a number using the unary plus (+) operator
console.log("+false:", +false); // Output: 0

// Convert 'false' to a negative number using the unary minus (-) operator
console.log("-false:", -false); // Output: 0

// Convert an empty string ("") to a number using the unary plus (+) operator
console.log("+\"\":", +""); // Output: 0

// Convert an empty string ("") to a negative number using the unary minus (-) operator
console.log("-\"\":", -""); // Output: -0

// Demonstrating variable assignment, increment operation, and console output
console.log("\n-- Variable Assignment and Increment Operation --\n");

// Declare three variables: number1, number2, and number3
let number1, number2, number3;

// Compute the sum of 2 + 2 and assign the result to all three variables in a single statement
// ❌ Not a good practice: Chaining assignments (number1 = number2 = number3 = 2 + 2) reduces readability.
//    - If the assignment chain is long, debugging issues can be difficult.
//    - It can introduce unintended side effects when working with complex expressions.
//    - Code maintainability suffers, especially for new developers reading the code.
number1 = number2 = number3 = 2 + 2;

// Define a variable named 'gameCounter' and initialize it with a starting value of 100
let gameCounter = 100;

// Increment the value of 'gameCounter' by 1 using the prefix increment operator (++gameCounter)
// ❌ Not a good practice: The prefix increment (++gameCounter) might be unnecessary here.
//    - If the increment is not used in an expression, it's more readable to use gameCounter += 1 or gameCounter++.
//    - Prefix increment can sometimes lead to confusion in complex expressions.
//    - It's clearer to explicitly show that the increment happens separately from any operation.
++gameCounter; // Now, gameCounter holds the updated value of 101

// Log the updated value of 'gameCounter' to the console for verification
console.log(gameCounter); // Expected output: 101

/*
 ✅ Suggested Best Practices:

 1️⃣ Assign values separately for clarity:
     - Improves readability and makes debugging easier.
     - Avoids unintended side effects when dealing with complex expressions.

     Example:
     ```javascript
     let number1 = 2 + 2;
     let number2 = number1;
     let number3 = number1;
     ```

 2️⃣ Use post-increment (gameCounter++) or explicit addition:
     - More intuitive than prefix increment (++gameCounter) unless used within an expression.
     - Enhances code clarity, especially for beginners.

     Example:
     ```javascript
     gameCounter += 1;  // More readable than ++gameCounter
     ```
*/

/*
🌟 Imagine you have 70 chocolates in a jar 🍫. 
Now, let's see what happens when we use `a++` and `++b` in JavaScript! 🚀

--------------------------------------------------
📌 Case 1: `a++` (Post-increment)
--------------------------------------------------
let a = 70;
console.log(a++); // prints 70 (old value)
console.log(a);   // prints 71 (after increment)

🔹 Explanation:
1️⃣ You have 70 chocolates (`a = 70`).
2️⃣ First, you show the current number (`console.log(a++)`), so it prints **70**.
3️⃣ After showing it, **you add 1 chocolate** to the jar.
4️⃣ Now `a` becomes **71**.
5️⃣ When you print `a` again, it shows **71**.

✨ Think of it like saying,  
   "Here’s my current chocolate count (70), and oh! Now I’m adding one more!" 🍫😊

--------------------------------------------------
📌 Case 2: `++b` (Pre-increment)
--------------------------------------------------
let b = 70;
console.log(++b); // prints 71 (new value)
console.log(b);   // prints 71

🔹 Explanation:
1️⃣ You have 70 chocolates (`b = 70`).
2️⃣ But this time, **before showing the number, you add 1 chocolate first**.
3️⃣ Now `b` becomes **71**.
4️⃣ Then, when you show `b`, it prints **71**.
5️⃣ When you print `b` again, it’s still **71**.

✨ Think of it like saying,  
   "Wait! Let me add one chocolate first… Okay, now I have 71!" 🍫😃

--------------------------------------------------
🌟 Simple Summary:
--------------------------------------------------
✔️ `a++` (Post-increment) → Shows the old number first, then increases.
✔️ `++b` (Pre-increment) → Increases first, then shows the new number.

💡 It’s like deciding whether to **count chocolates before or after** you add one! 🍫✨
*/

// 🔗 Official ECMAScript Specification on Type Conversion:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
