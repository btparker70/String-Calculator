class StringCalculator {
  constructor (input) {
    this.input = input;
    this.delimiters = `','`;
    this.numbersToCompute = input;
    this.checkCustomDelimiters(input);
  }

  checkCustomDelimiters(input) {
    // customer delimiter(s)?
    if (input.substring(0, 2) === '//') {
      // grab delimiter(s) before new line
      this.delimiters = input.substring(2).split(/\r\n|\n|\r/)[0], 
      this.numbersToCompute = input.substring(2).split(/\r\n|\n|\r/)[1] 
    }

    // multiple delimiters?
    let delimiters = this.delimiters;
    if (delimiters !== ',') {
      delimiters = delimiters.replace(',', '');
      delimiters = new RegExp(`[,${delimiters}]`)
    }
    // separate and convert values to numbers
    this.numbersToCompute = this.numbersToCompute.split(delimiters).map( Number );

    let negativesCounter = [];
    // check for <1000 and negatives
    this.numbersToCompute = this.numbersToCompute.filter(function(item) {
      if (item > 1000) return false;
      if (Math.sign(item) === -1) {
        negativesCounter.push(item);
      }

    return true
    })

    // check if negative numbers in input
    try {
      negativesCounter.length
    }
    catch (e) {
      throw new Error(`Negatives not allowed at ${negativesCounter.toString()}`);
    }
  }

  add() {
    return this.numbersToCompute.reduce((a, b) => a + b);
  }
}

module.exports = StringCalculator;