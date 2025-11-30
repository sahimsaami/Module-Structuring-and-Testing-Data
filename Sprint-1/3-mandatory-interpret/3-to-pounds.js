const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence 
// The program then builds up a string representing the price in pounds 

// You need to do a step-by-step breakdown of each line in this program  
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. The letter p is removed from the end of the string. The index starts at 0 and is truncated to one unit before the total length of the string, leaving only a pure numeric value ("399").
// 3. The price string is guaranteed to be at least 3 characters long (if the price was something like "9", it would be converted to "009"). This standardization is necessary to correctly separate pounds and pence in the next step.
// 4. The Pounds part is extracted by cutting the standardized string, except for the last 2 digits (which are pence).
// 5. The Pence part is extracted by taking the last 2 digits of the standardized string. If there is only one digit, it is padded with a trailing zero to ensure it has two digits.
// 6. Finally, the pounds and pence parts are combined into a formatted string representing the price in pounds and pence, prefixed with the pound symbol (£), and this final string is printed to the console.