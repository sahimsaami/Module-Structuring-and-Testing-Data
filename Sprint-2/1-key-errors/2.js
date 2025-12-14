
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// A function cannot be defined with a number as a parameter name: function square(3). 

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number. 

// =============> explain this error message here
// Inside the function parentheses should be the variable name, not the number.
// It is illegal to write (3), because 3 cannot be a parameter.
// Also, the variable num is used in return, which is not defined at all.

// Finally, correct the code to fix the problem
function square (num){ 
    return num * num; 
}
console.log ( square(5));
// =============> write your new code here


