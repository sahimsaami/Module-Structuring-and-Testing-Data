// Predict and explain first...

// =============> write your prediction here
// the function does not return anything and only has console.log.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Because the function does not return any value, the result of calling the function is undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b){
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
