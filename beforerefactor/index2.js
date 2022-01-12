const stringCalculator = (input) => {
  if (typeof input !== 'string') throw new Error('Input must be a string');

  let delimiters = ',';

  function checkCustomDelimiters(input) {
    // customer delimiter(s)?
    if (input.substring(0, 2) === '//') {
      // grab delimiter(s) before new line
      delimiters = input.substring(2).split(/\r\n|\n|\r/)[0], 
      input = input.substring(2).split(/\r\n|\n|\r/)[1] 
    }
  }
  checkCustomDelimiters(input);

  this.add = function(str, delimiters) {
    console.log(str, delimiters)
    console.log(typeof delimiters)
    // multiple delimiters?
    if (delimiters !== `','`) {
      delimiters = delimiters.replace(',', '');
      delimiters = new RegExp(`[,${delimiters}]`)
    }
    console.log(str, delimiters)
    // separate and convert values to numbers
    let subStrings = str.split(delimiters).map( Number );
    console.log(subStrings)
    let negativesCounter = [];
    // check for <1000 and negatives
    subStrings = subStrings.filter(function(item) {
      if (item > 1000) return false;
      if (Math.sign(item) === -1) {
        negativesCounter.push(item);
      }

    return true
    })

    if (negativesCounter.length) throw new Error(`Negatives not allowed at ${negativesCounter.toString()}`)

    let sum = subStrings.reduce((a, b) => a + b);
    console.log(sum)
    return sum;
  }
  add(input, delimiters)
}

module.exports = stringCalculator;