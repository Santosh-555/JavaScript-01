// Declare constants and variables
const accountId = 260899; // Immutable constant
let accountEmail = "santosh555@gmail.com"; // Initial email address
let accountPassword = "260835"; // Initial password
let accountCity = "Mumbai"; // Initial city
let accountState; // State is undefined initially

// Uncommenting the next line will throw an error because 'accountId' is immutable
// accountId = 260840; 

// Update mutable variables
accountEmail = "santosh505@gmail.com"; // Update email address
accountPassword = "260840"; // Update password
accountCity = "Gujarat"; // Update city

// Display all account details in a tabular format for better readability
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});

// Note: Avoid using 'var' for variable declarations due to its lack of block scoping, which can lead to unexpected behavior and bugs. Prefer 'let' and 'const' for better scoping and predictability.
