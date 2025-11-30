// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
// The error is that cityOfBirth is used before it is declared. we need to declare cityOfBirth before using it in the console.log statement.

//like this:
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);