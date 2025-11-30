let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are seven function calls in this file. They are on the following lines:
// Line 3: carPrice.replaceAll(",", "")
// Line 3: Number(...)
// Line 4: priceAfterOneYear.replaceAll("," "")
// Line 4: Number(...)
// Line 7: console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is occurring on line 4 because there is a missing comma in the replaceAll function call.
// It can be fixed by adding a comma between the two quotation marks in the replaceAll function call like this: priceAfterOneYear.replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are on lines 4 and 5:
// Line 3: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// The variable declarations are on lines 1 and 2:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",","")) is first removing all commas from the string carPrice using the replaceAll method, and then converting the resulting string into a number using the Number function. This is necessary because carPrice is initially a string that contains commas, which would prevent it from being used in mathematical calculations.