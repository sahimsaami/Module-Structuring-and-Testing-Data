function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index variable starts at 0 and increments by 1 in each iteration of the while loop until it finds the target character or reaches the end of the string.
// b) What is the if statement used to check
// The if statement checks if the current character in the string (str[index]) is equal to the target character (char).
// c) Why is index++ being used?
// index++ is used to move to the next character in the string for the next iteration of the loop.
// d) What is the condition index < str.length used for?
// The condition index < str.length is used to ensure that the loop continues as long as there are characters left to check in the string.
module.exports = find;
