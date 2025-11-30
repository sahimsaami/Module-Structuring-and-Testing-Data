const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are six variable declarations in this program. They are on the following lines:
// line 1, line 3, line 4, line 6, line 7, line 9.

// b) How many function calls are there?
// There is one function call in this program. It is in the line 10: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This operator calculates the remainder of dividing movieLength (the total length of the movie in seconds) by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression is used to find the total number of minutes in a movie.
// It subtracts the remaining seconds from the total movie length to get a value that is a multiple of 60, and then divides that value by 60 to convert it from seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result variable is a String that stores the total time of the movie in the final hour:minute:second (HH:MM:SS) format.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will logically work for any positive integer as the length of the movie.
