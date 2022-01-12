const { expect, test, describe } = require("@jest/globals");
const StringCalculator = require("./index");

describe('StringCalculator.add()', () => {
  test(" return type of add() is number", () => {
    input = '2,5,1'
    const stringCalculator = new StringCalculator(input);
    expect(typeof stringCalculator.add()).toBe('number')
  })
})

describe(" input with non-custom ',' delimiter", () => {
  test(" '1,2,3' add to equal 6 ", () => {
    input = '1,2,3'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(6)
  })  
})

describe("input with custom delimiter length of 1", () => {
  test(" '//;\n1;3;4' add to equal 8 ", () => {
    input = '//;\n1;3;4'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(8)
  })  
})

describe("input with custom delimiter of arbitrary length", () => {
  test(" '//@@@@@\n1@@@@@5@@@@@4' add to equal 10 ", () => {
    input = '//@@@@@\n1@@@@@5@@@@@4'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(10)
  })  
})

describe("multiple delimiter types", () => {
  test(" '//$,@\n1$2@3' add to equal 6 ", () => {
    input = '//$,@\n1$2@3'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(6)
  })  
})

describe("multiple delimiter types includes ',' ", () => {
  test(" '//$,,\n4$3,1' add to equal 8 ", () => {
    input = '//$,,\n4$3,1'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(8)
  })  
})

describe("input with empty string interpreted as 0", () => {
  test(" '1,2,3, ,5' add to equal 11", () => {
    input = '1,2,3, ,5'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(11)
  })  
})

describe("input ignores new lines", () => {
  test(" '3,\n1,\n6' add to equal 10 ", () => {
    input = '3,\n1,\n6'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(10)
  })  
})

describe("input ignores numbers greater than 1000", () => {
test(" '999,1000,3000' add to equal 1999 ", () => {
  input = '999,1000,3000'
      const stringCalculator = new StringCalculator(input);
      expect(stringCalculator.add()).toBe(1999)
    })  
  })

describe("check for multiple number cases", () => {
test(" '//$$\n1$$1001$$ $$2' add to equal 3 ", () => {
  input = '//$$\n1$$1001$$ $$2'
    const stringCalculator = new StringCalculator(input);
    expect(stringCalculator.add()).toBe(3)
  })  
})

describe("input empty string", () => {
  test(" '' add to equal 0 ", () => {
    input = ''
      const stringCalculator = new StringCalculator(input);
      expect(stringCalculator.add()).toBe(0)
  })  
})

describe("throw error if input contains negative values", () => {
  test(" '1,-2,-3,4,-3,-2' to throw Negatives not allowed at -2,-3,-3,-2 ", () => {
    input = '1,-2,-3,4,-3,-2'
    const stringCalculator = new StringCalculator(input);
    expect(() => stringCalculator.checkCustomDelimiters()).toThrow()
  })  
})
