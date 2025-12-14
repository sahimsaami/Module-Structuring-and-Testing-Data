// Predict and explain first...
//  =============> write your prediction here
// There is a clear mistake in this code. The return word is separated.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// In JavaScript, when you write return and break the line after it, the code after return is not executed at all.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);