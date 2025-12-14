// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// In JavaScript, you cannot define the same variable name again with let within a block, when it has already been used as a parameter. Because of this behavior, JavaScript considers the code illegal and throws a SyntaxError.
// =============> write your new code here
function capitalise(str){
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str
}