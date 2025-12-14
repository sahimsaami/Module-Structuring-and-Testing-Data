// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

// console.log(decimalNumber);

// =============> write your explanation here
// Inside the function, the variable decimalNumber is redefined as const, while the same name is already a function parameter. This causes SyntaxError: already been declared.
// Outside the function, console.log(decimalNumber) is written, but this variable does not exist outside the function at all. This causes ReferenceError: not defined.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}`;
  return percentage;
}
console.log(convertToPercentage(0.5)); 