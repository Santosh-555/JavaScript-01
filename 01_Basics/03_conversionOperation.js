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
