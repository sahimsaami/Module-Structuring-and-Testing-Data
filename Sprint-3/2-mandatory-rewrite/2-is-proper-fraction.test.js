const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
// Case 5: Identify Zero Numerator
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});
// Case 6: Identify Zero Denominator
test("should return false when denominator is zero", () => {
  expect(isProperFraction(3, 0)).toEqual(false);
});
// Case 7: Identify Both Numerator and Denominator as Zero
test("should return false when both numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
