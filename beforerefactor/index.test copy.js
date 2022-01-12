const { expect, test } = require("@jest/globals");
const stringCalculator = require("./index2");

// input is type string
test(" [1,2,3] to throw error input not type string", () => {
  input = [2,5,1]
  expect(() => stringCalculator(input)).toThrow('Input must be a string')
})

// return type is type number
test(" '2,5,1' to be type of integer", () => {
  input = '2,5,1'
  expect(typeof stringCalculator(input)).toBe('number')
})

// input with non-custom ',' delimiter
test(" '1,2,3' to equal 6 ", () => {
  input = '1,2,3'
  expect(stringCalculator(input)).toBe(6)
})

// input with custom delimiter length 1
test(" '//;\n1;3;4' to equal 8 ", () => {
  input = '//;\n1;3;4'
  expect(stringCalculator(input)).toBe(8)
})

// input with custom delimiter arbitrary length
test(" '//@@@@@\n1@@@@@5@@@@@4' to equal 10 ", () => {
  input = '//@@@@@\n1@@@@@5@@@@@4'
  expect(stringCalculator(input)).toBe(10)
})

// multiple delimiter types
test(" '//$,@\n1$2@3' to equal 6 ", () => {
  input = '//$,@\n1$2@3'
  expect(stringCalculator(input)).toBe(6)
})

// throw error if input contains negative values
test(" '1,-2,-3,4,-3,-2' to throw Negatives not allowed at -2,-3,-3,-2 ", () => {
  input = '1,-2,-3,4,-3,-2'
  expect(() => stringCalculator(input)).toThrow("Negatives not allowed at -2,-3,-3,-2")
})

// input with empty string interpreted as 0
test(" '1,2,3, ,5' to equal 11", () => {
  input = '1,2,3, ,5'
  expect(stringCalculator(input)).toBe(11)
})

// input ignores new lines
test(" '3,\n1,\n6' to equal 10 ", () => {
  input = '3,\n1,\n6'
  expect(stringCalculator(input)).toBe(10)
})

// input ignores numbers greater than 1000
test(" '999,1000,3000' to equal 1999 ", () => {
  input = '999,1000,3000'
  expect(stringCalculator(input)).toBe(1999)
})

// check for multiple number cases
test(" '//$$\n1$$1001$$ $$2' to equal 3 ", () => {
  input = '//$$\n1$$1001$$ $$2'
  expect(stringCalculator(input)).toBe(3)
})

// input empty string 
test(" '' to equal 0 ", () => {
  input = ''
  expect(stringCalculator(input)).toBe(0)
})