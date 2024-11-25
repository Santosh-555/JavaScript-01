"use strict"; // Enforces strict mode to ensure modern JavaScript standards.

// Note: The `alert()` method is a browser-specific feature. Since this script is running in Node.js, the use of `alert` is not supported.

// A simple addition operation with emphasis on code readability.
console.log(
    3 + 3
); 

console.log("Santosh Kumar"); // Outputs a string to the console.

let name = "Santosh Kumar"; // Declares a variable to hold a string value.
let age = 18;               // Declares a variable to hold a numeric value.
let isLoggedIn = false;     // Declares a variable with a boolean value.
let state;                  // Declares a variable without initializing it, resulting in `undefined`.
let district = null;        // Declares a variable explicitly set to null.

// --- Data Types in JavaScript ---
// - Number: Represents numeric values (e.g., integers, floats).
// - BigInt: Represents large integers beyond the safe range of `Number`.
// - String: Represents text enclosed in double or single quotes.
// - Boolean: Represents true/false values.
// - Null: Represents a deliberate empty or non-existent value.
// - Undefined: Represents variables declared but not yet assigned a value.
// - Symbol: Represents a unique, immutable value, often used as keys in objects.
// - Object: A collection of key-value pairs and a fundamental data type for structured data.

// Demonstrating the `typeof` operator:
console.log(typeof "Santosh Kumar"); // Returns 'string'.
console.log(typeof age);            // Returns 'number'.
console.log(typeof null);           // Returns 'object' (this is a well-known quirk in JavaScript).
console.log(typeof undefined);      // Returns 'undefined'.

// --- References ---
// - MDN Docs for comprehensive JavaScript documentation: https://developer.mozilla.org
// - EcmaScript original documentation: https://tc39.es/ecma262/
